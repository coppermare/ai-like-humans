"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface ShareButtonsProps {
  text: string;
}

export const ShareButtons = ({ text }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const getShareUrl = () => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  };

  const handleCopy = async () => {
    const url = getShareUrl();
    if (!url) return;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  const openWindow = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const shareToTwitter = () => {
    const url = encodeURIComponent(getShareUrl());
    const shareText = encodeURIComponent(text);
    openWindow(`https://twitter.com/intent/tweet?text=${shareText}&url=${url}`);
  };

  const shareToLinkedIn = () => {
    const url = encodeURIComponent(getShareUrl());
    openWindow(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
  };

  const loadImage = (src: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("Failed to load image"));
      img.src = src;
    });

  const drawCircularImage = (
    ctx: CanvasRenderingContext2D,
    image: HTMLImageElement,
    x: number,
    y: number,
    size: number
  ) => {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(image, x, y, size, size);
    ctx.restore();
  };

  const downloadResults = async () => {
    setDownloading(true);
    try {
      const canvas = document.createElement("canvas");
      const width = 1600;
      const height = 900;
      const scale = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = width * scale;
      canvas.height = height * scale;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const ctx = canvas.getContext("2d");
      
      if (!ctx) return;
      ctx.scale(scale, scale);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // Dark background
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);

      // Title
      ctx.fillStyle = "#e5e5e5";
      ctx.font = "bold 56px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("AI Personality Test Results", width / 2, 110);

      // Match info (extracted from page)
      const matchName = document.querySelector('[data-match-name]')?.textContent || "";
      const similarity = document.querySelector('[data-similarity]')?.textContent || "";
      const modelLogo = document.querySelector('[data-model-logo]')?.getAttribute("data-model-logo") || "";
      const character1 = document.querySelector('[data-character-1]')?.getAttribute("data-character-1") || "";
      const character2 = document.querySelector('[data-character-2]')?.getAttribute("data-character-2") || "";
      const characterName1 = document.querySelector('[data-character-name-1]')?.getAttribute("data-character-name-1") || "";
      const characterName2 = document.querySelector('[data-character-name-2]')?.getAttribute("data-character-name-2") || "";
      const matchNickname = document.querySelector('[data-match-nickname]')?.getAttribute("data-match-nickname") || "";
      const matchDescription = document.querySelector('[data-match-description]')?.getAttribute("data-match-description") || "";
      
      // Platform logo
      try {
        const platformLogo = await loadImage("/AI__Humans.svg");
        ctx.drawImage(platformLogo, 50, 30, 140, 48);
      } catch (error) {
        console.error(error);
      }

      // Match info
      ctx.textAlign = "center";
      ctx.font = "40px sans-serif";
      ctx.fillText(`Your match: ${matchName}`, width / 2, 230);
      ctx.font = "30px sans-serif";
      ctx.fillStyle = "#a3a3a3";
      if (matchNickname) {
        ctx.fillText(matchNickname, width / 2, 270);
      }
      ctx.font = "34px sans-serif";
      ctx.fillText(`Similarity: ${similarity}`, width / 2, 320);

      // Images
      const imageY = 360;
      if (modelLogo) {
        try {
          const modelImg = await loadImage(modelLogo);
          drawCircularImage(ctx, modelImg, width / 2 - 40, imageY, 80);
        } catch (error) {
          console.error(error);
        }
      }

      const characterY = imageY + 120;
      const characterSize = 160;
      const gap = 80;
      const totalWidth = characterSize * 2 + gap;
      const startX = width / 2 - totalWidth / 2;

      if (character1) {
        try {
          const charImg1 = await loadImage(character1);
          drawCircularImage(ctx, charImg1, startX, characterY, characterSize);
          ctx.font = "20px sans-serif";
          ctx.fillStyle = "#d4d4d4";
          ctx.textAlign = "center";
          ctx.fillText(characterName1, startX + characterSize / 2, characterY + characterSize + 24);
        } catch (error) {
          console.error(error);
        }
      }

      if (character2) {
        try {
          const charImg2 = await loadImage(character2);
          const x = startX + characterSize + gap;
          drawCircularImage(ctx, charImg2, x, characterY, characterSize);
          ctx.font = "20px sans-serif";
          ctx.fillStyle = "#d4d4d4";
          ctx.textAlign = "center";
          ctx.fillText(characterName2, x + characterSize / 2, characterY + characterSize + 24);
        } catch (error) {
          console.error(error);
        }
      }

      // Description + URL
      if (matchDescription) {
        ctx.font = "22px sans-serif";
        ctx.fillStyle = "#b3b3b3";
        ctx.textAlign = "center";
        ctx.fillText(matchDescription, width / 2, height - 90);
      }
      ctx.font = "22px sans-serif";
      ctx.fillStyle = "#737373";
      ctx.fillText(window.location.origin, width / 2, height - 50);

      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "ai-personality-test-results.png";
        a.click();
        URL.revokeObjectURL(url);
        setDownloading(false);
      });
    } catch (error) {
      console.error("Failed to download image", error);
      setDownloading(false);
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy link"}
      </Button>
      <Button variant="outline" onClick={shareToTwitter}>
        Share on X
      </Button>
      <Button variant="outline" onClick={shareToLinkedIn}>
        Share on LinkedIn
      </Button>
      <Button variant="outline" onClick={downloadResults} disabled={downloading}>
        <Download className="h-4 w-4 mr-2" />
        {downloading ? "Generating..." : "Download image"}
      </Button>
    </div>
  );
};
