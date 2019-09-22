import { withTranslation } from '@utils/i18n';
import clsx from 'clsx';

const LanguageSwitch = (props) => {
    const { t, changeLanguage, currentLanguage, getLanguages, allLanguages } = props;

    const toggleLanguage = () => {
        changeLanguage(currentLanguage === 'en' ? 'cs' : 'en');
    };

    const switchLanguage = (language) => (e) => {
        changeLanguage(language);
    };

    return (
        <div className="language-switch">
            <button type="button" className="language-switch__toggle" onClick={toggleLanguage}>
                {props.t('change-locale')}
            </button>
            {allLanguages && (
                <div className="language-switch__changer">
                    {allLanguages.map((language, i) => (
                        <a
                            className={clsx('language language--', language)}
                            onClick={switchLanguage(language)}
                            key={i}
                        >
                            <span>{language}</span>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default withTranslation('common')(LanguageSwitch);
