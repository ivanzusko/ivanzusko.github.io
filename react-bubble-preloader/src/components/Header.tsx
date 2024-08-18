export default function Header({
    totalDownloads
}: {
    totalDownloads: number
}) {
    return (
        <section className="page-header">
            <h1 className="project-name">React Bubble Preloader</h1>
            <h2 className="project-tagline">examples</h2>
            <h2>
                <DownLoadSVG label="Downloads" totalDownloads={totalDownloads} />
            </h2>
            <a href="https://github.com/ivanzusko/react-bubble-preloader" className="btn">View on GitHub</a>
        </section>
    );
}

const DownLoadSVG = ({
    label,
    totalDownloads,
} : {
    label: string;
    totalDownloads: number;
}) => (
    <a href={'https://www.npmjs.com/package/react-bubble-preloader'} target="_blank">
        <svg width="136" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stopColor="#bbb" stopOpacity=".1"/><stop offset="1" stopOpacity=".1"/></linearGradient><clipPath id="a"><rect width="136" height="20" rx="3" fill="#fff"/></clipPath><g clipPath="url(#a)"><path fill="#555" d="M0 0h69v20H0z"/><path fill="#4c1" d="M69 0h67v20H69z"/><path fill="url(#b)" d="M0 0h136v20H0z"/></g><g fill="#fff" textAnchor="middle" fontFamily="DejaVu Sans,Verdana,Geneva,sans-serif" fontSize="10"><text x="34.5" y="15" fill="#010101" fillOpacity=".3">{label}</text><text x="34.5" y="14">{label}</text><text x="101.5" y="15" fill="#010101" fillOpacity=".3">{totalDownloads}</text><text x="101.5" y="14">{totalDownloads}</text></g></svg>
    </a>
);
