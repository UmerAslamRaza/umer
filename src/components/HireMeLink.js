import Icon from '@/components/icons';
import PillLink from '@/components/PillLink';

/** Centered "Hire Me" button used in page headers. */
export default function HireMeLink() {
    return (
        <PillLink href="/contact" className="w-max mx-auto" icon={<Icon name="paperPlane"/>}>
            Hire Me
        </PillLink>
    );
}
