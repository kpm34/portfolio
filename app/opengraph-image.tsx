import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kashyap Maheshwari — portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [serif, sans, mono] = await Promise.all([
    fetch(
      "https://fonts.gstatic.com/s/instrumentserif/v4/_9n2XzU9cqnreW3sRhlldw.woff"
    ).then((res) => res.arrayBuffer()),
    fetch(
      "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff"
    ).then((res) => res.arrayBuffer()),
    fetch(
      "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKy.woff"
    ).then((res) => res.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF9F6",
          color: "#16150F",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#800020",
            }}
          />
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 18,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#5A5750",
            }}
          >
            Kashyap Maheshwari
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontFamily: "Instrument Serif",
              fontSize: 72,
              fontStyle: "italic",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 920,
            }}
          >
            I build AI systems that operate real businesses.
          </div>
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 28,
              lineHeight: 1.45,
              color: "#5A5750",
              maxWidth: 820,
            }}
          >
            Live products on the App Store, Google Play, and the web.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(22, 21, 15, 0.12)",
            paddingTop: 28,
          }}
        >
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 18,
              letterSpacing: "0.08em",
              color: "#800020",
            }}
          >
            kashcreates.app
          </div>
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 16,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#5A5750",
            }}
          >
            Portfolio
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "italic" as const },
        { name: "Inter", data: sans, style: "normal" as const },
        { name: "JetBrains Mono", data: mono, style: "normal" as const },
      ],
    }
  );
}
