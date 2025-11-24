import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import TopPanel from "@/components/TopPanel";
import Menu from "@/components/Menu";
import GlobalScripts from "@/components/GlobalScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nexus Living",
  description: "",
  icons: {
    icon: '/assets/img/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/plugins/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/fancybox.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/mapbox-style.css" />
        <link rel="stylesheet" href="/assets/css/style-dark.css" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="mry-app">
          <Preloader />
          <Cursor />
          <TopPanel />
          <Menu />
          {children}
          <GlobalScripts />
        </div>

        {/* PLUGIN SCRIPTS ONLY */}
        <script src="/assets/js/plugins/jquery.min.js"></script>
        <script src="/assets/js/plugins/tween-max.min.js"></script>
        <script src="/assets/js/plugins/scroll-magic.js"></script>
        <script src="/assets/js/plugins/scroll-magic-gsap-plugin.js"></script>
        <script src="/assets/js/plugins/swiper.min.js"></script>
        <script src="/assets/js/plugins/isotope.min.js"></script>
        <script src="/assets/js/plugins/fancybox.min.js"></script>
        <script src="/assets/js/plugins/mapbox.min.js"></script>
        <script src="/assets/js/plugins/smooth-scrollbar.min.js"></script>
        <script src="/assets/js/plugins/overscroll.min.js"></script>
        <script src="/assets/js/plugins/canvas.js"></script>
        <script src="/assets/js/plugins/parsley.min.js"></script>
      </body>
    </html>
  );
}
