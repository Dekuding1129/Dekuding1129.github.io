"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectPreviewProps = {
  src: string;
  alt: string;
  sizes: string;
};

export default function ProjectPreview({ src, alt, sizes }: ProjectPreviewProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`project-preview ${loaded ? "is-loaded" : ""}`} aria-busy={!loaded}>
      <span className="project-preview__loader" aria-hidden="true">
        Loading preview
      </span>
      <Image
        className="project-preview-image"
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
