import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Icon, {Logo} from '@/components/icons';
import PillLink from '@/components/PillLink';
import {SocialIconLinks} from '@/components/SocialLinks';
import {NAV_ITEMS} from '@/data/navigation';
import {PROFILE} from '@/data/site';
import useTheme from '@/hooks/useTheme';
import {THEMES} from '@/lib/theme';
import {withBasePath} from '@/utils/basePath';

const normalizePath = (path) => (path.length > 1 ? path.replace(/\/$/, '') : path);

/** Light/dark toggle icon: shows the moon in light mode and the sun in dark mode. */
function ThemeToggleButton({theme}) {
    return (
        <button type="button" aria-label={theme === THEMES.DARK ? 'Switch to light theme' : 'Switch to dark theme'}>
            <span className="dark_btn d-flex justify-content-center align-items-center n11-color">
                <Icon name={theme === THEMES.DARK ? 'sun' : 'moon'}/>
            </span>
        </button>
    );
}

function CountBadge({count, className = ''}) {
    return (
        <span className={`n5-color bg2-color fs-ten px-1 pt-1 rounded-2 me-3${className ? ` ${className}` : ''}`}>
            {count}
        </span>
    );
}

function DesktopNav({isActive}) {
    return (
        <div className="menu-list">
            <ul className="d-flex flex-column gap-3">
                {NAV_ITEMS.map((item) => (
                    <li key={item.href} className="rounded-3">
                        <Link
                            className={`d-flex justify-content-between align-items-center rounded-3 ${isActive(item.href) ? 'active' : ''}`}
                            href={item.href}>
                            <div className="menu-item d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2">
                                <Icon name={item.icon}/>
                                {item.label}
                            </div>
                            {item.count !== undefined && <CountBadge count={item.count}/>}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function MobileNav({isActive}) {
    return (
        <div className="w-100 bgn1-color p-3 position-fixed z-3 bottom-0 d-block d-lg-none br-top-n5 box-shadow1">
            <div className="header-bottom-menu w-full">
                <ul className="d-flex gap-1 align-items-center justify-content-between">
                    {NAV_ITEMS.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <li key={item.href} className={active ? 'rounded-3 bg1-color' : undefined}>
                                <Link className="d-flex justify-content-between align-items-center" href={item.href}
                                      aria-label={item.label}>
                                    <div className={`d-flex align-items-center gap-2 fs-eight p-2 ${active ? 'n11-color' : 'n5-color'}`}>
                                        <span className="fs-five d-flex align-items-center justify-content-center">
                                            <Icon name={item.mobileIcon}/>
                                        </span>
                                        <span className="d-none d-md-block">{item.label}</span>
                                    </div>
                                    {item.showCountOnMobile && item.count !== undefined && (
                                        <CountBadge count={item.count} className="d-none d-md-block"/>
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default function Sidebar() {
    const {theme, toggleTheme} = useTheme();
    const router = useRouter();
    const currentPath = normalizePath(router.pathname);
    const isActive = (href) => normalizePath(href) === currentPath;

    return (
        <div>
            <div className="side-menu">
                <div className="sidebar-btn close-btn cursor-pointer d-block d-lg-none">
                    <i className="fs-two p1-color"><Icon name="close"/></i>
                </div>
                <div className="d-flex">
                    <div className="side-menu-left">
                        <div>
                            <div className="d-flex flex-column gap-8 justify-content-center align-items-center mt-6">
                                <Link className="side-icon p1-color bgn2-color brn4" href="/" aria-label="Home">
                                    <Logo/>
                                </Link>
                                <div className="d-flex flex-column align-items-center gap-1" onClick={toggleTheme}>
                                    <div className="side-icon bg1-color">
                                        <div className="d-flex align-items-center gap-2">
                                            <ThemeToggleButton theme={theme}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-menu-right overflow-y-auto">
                        <div className="d-flex flex-column gap-6 justify-content-between py-10 px-5 bgn2-color h-100">
                            <div>
                                <div className="sidebar-profile">
                                    <div className="position-relative">
                                        <div className="profile-img1 d-flex justify-content-center overflow-hidden mx-auto">
                                            <Image
                                                alt={PROFILE.name}
                                                loading="lazy"
                                                width={73}
                                                height={78}
                                                decoding="async"
                                                className="user"
                                                style={{color: 'transparent'}}
                                                src={withBasePath(PROFILE.sidebarAvatar)}
                                            />
                                        </div>
                                        <span className="thumb">👋</span>
                                    </div>
                                    <h4 className="n5-color fw-semibold fs-five mt-2 text-center">{PROFILE.name}</h4>
                                    <span className="n5-color fs-nine d-block text-center">{PROFILE.role}</span>
                                    <span className="n5-color fs-nine d-block text-center">{PROFILE.specialization}</span>
                                    <span className="p1-color fs-nine fw-medium d-flex justify-content-center align-items-center gap-1 mt-1">
                                        <Icon name="mapPin"/>
                                        {PROFILE.location}
                                    </span>
                                    <SocialIconLinks className="d-flex justify-content-center gap-2 align-items-center mt-4"/>
                                </div>
                                <div className="line-divider my-4 my-md-8"></div>
                                <DesktopNav isActive={isActive}/>
                            </div>
                            <PillLink
                                href="/contact"
                                className="mx-auto"
                                icon={<i className="ph ph-paper-plane-tilt"><Icon name="paperPlane"/></i>}>
                                Hire Me
                            </PillLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 bgn1-color p-3 position-fixed z-3 top-0 d-lg-none d-flex align-items-center justify-content-between br-bottom-n5 box-shadow1">
                <Link className="side-icon bgn2-color brn4" href="/" aria-label="Home">
                    <Logo fill="rgba(var(--p1))"/>
                </Link>
                <div className="d-flex gap-3 align-items-center">
                    <div className="side-icon bg1-color" onClick={toggleTheme}>
                        <div className="d-flex align-items-center gap-2">
                            <ThemeToggleButton theme={theme}/>
                        </div>
                    </div>
                </div>
            </div>

            <MobileNav isActive={isActive}/>
        </div>
    );
}
