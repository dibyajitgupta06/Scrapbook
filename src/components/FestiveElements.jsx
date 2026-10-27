import './FestiveElements.css'

export default function FestiveElements() {
  return (
    <div className="festive-decorations" aria-hidden="true">
      {/* Maa Durga 10-Armed Emoji Motif (Top-Left) */}
      <img
        src={`${import.meta.env.BASE_URL}images/durga_emoji.png`}
        alt=""
        className="festive-durga-motif"
        loading="eager"
        draggable="false"
      />

      {/* Dhaki Drummer Playing Festive Dhak (Bottom-Left) */}
      <img
        src={`${import.meta.env.BASE_URL}images/dhaki_motif.png`}
        alt=""
        className="festive-dhaki-motif"
        loading="eager"
        draggable="false"
      />
    </div>
  )
}
