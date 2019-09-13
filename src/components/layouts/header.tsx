import Nav from '@components/layouts/nav';
import { withTranslation, i18n } from '@utils/i18n';
import LanguageSwitch from '@components/languageSwitch/languageSwitchContainer';

const click = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'cs' : 'en');
};

const Header = (props) => {
    return (
        <header>
            <Nav />
            <div>
                <style jsx>{`
                    h1 {
                        text-decoration: underline;
                    }

                    .home-block1 {
                        display: flex;
                    }

                    img {
                        width: 100%;
                    }
                `}</style>
                <div>
                    <h1>{props.t('title-1')}</h1>

                    <div className="home-block1">
                        <p>{props.t('intro-texts.text-1')}</p>
                        <p>{props.t('intro-texts.text-2')}</p>
                    </div>
                </div>
                <LanguageSwitch />
                {/* <div>
                    <button type="button" onClick={click}>
                        {props.t('change-locale')}
                    </button>
                </div> */}
            </div>
        </header>
    );
};

export default withTranslation('common')(Header);
