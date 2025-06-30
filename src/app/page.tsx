import Home from "../components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sheila Susan | Portfolio",
  description: "Full stack web developer",
  keywords: ["web development", "full-stack", "remote work", "portfolio"],
  authors: [{ name: "Sheila Susan", url: "https://sheilasusan.com" }],
  openGraph: {
    title: "Sheila Susan | Portfolio",
    description: "Full-stack web developer",
    type: "website",
    siteName: "Sheila Susan | Portfolio",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1545149127054475269/Y5LEA7cQ_400x400.jpg",
        width: 800,
        height: 600,
        alt: "Sheila Susan | Portfolio",
      },
    ],
  },
};

export default function HomePage() {

  return (
    <>
    <Home />
    </> 
  );
}