/** Section title with the accent line, plus an optional intro paragraph. */
export default function SectionHeading({title, description}) {
    return (
        <div className="section-heading">
            <div className="d-flex align-items-center gap-2">
                <div className="title-line"></div>
                <h2 className="display-four n5-color fw-semibold">{title}</h2>
            </div>
            {description && <p className="fs-seven n4-color mt-2 mt-md-4">{description}</p>}
        </div>
    );
}
