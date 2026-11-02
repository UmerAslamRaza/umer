import {Fragment} from 'react';
import Icon from '@/components/icons';
import {formatDuration} from '@/lib/dates';

const CHIP_CLASSES = 'd-inline-flex align-items-center gap-1 fs-nine fw-medium px-2 px-md-3 py-1 brn3 rounded-pill';

/**
 * Onsite -> Remote style timeline for a role whose working arrangement changed.
 * `modes` comes from an EXPERIENCE entry's `workModes` (see data/resume.js).
 */
export default function WorkModes({modes, className = 'mt-2 mt-md-3'}) {
    return (
        <div className={`d-flex flex-wrap align-items-center gap-2 ${className}`}>
            {modes.map((phase, index) => {
                const isCurrent = !phase.end;
                return (
                    <Fragment key={`${phase.mode}-${phase.start}`}>
                        {index > 0 && <span className="n4-color fs-eight" aria-hidden="true">→</span>}
                        <span className={`${CHIP_CLASSES} ${isCurrent ? 'p1-color' : 'n4-color'}`}>
                            <Icon name="mapPin"/>
                            {phase.mode} · {phase.location} · {isCurrent ? 'Current' : formatDuration(phase.start, phase.end)}
                        </span>
                    </Fragment>
                );
            })}
        </div>
    );
}
