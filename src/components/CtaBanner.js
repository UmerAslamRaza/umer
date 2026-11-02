import Icon from '@/components/icons';
import PillLink from '@/components/PillLink';

/** Full-width "next project" call-to-action strip. */
export default function CtaBanner({title, text, buttonLabel = 'Let’s get in touch', href = '/contact'}) {
    return (
        <section className="next-project pt-120 pb-120">
            <div>
                <div className="container d-flex gap-3 gap-md-6 flex-wrap justify-content-between align-items-center">
                    <div className="next-project-content">
                        <h3 className="display-four n11-color fw-semibold mb-2 mb-md-4">{title}</h3>
                        <p className="fs-seven n11-color">{text}</p>
                    </div>
                    <PillLink href={href} className="h-100" icon={<Icon name="arrowRight"/>}>
                        {buttonLabel}
                    </PillLink>
                </div>
            </div>
        </section>
    );
}
