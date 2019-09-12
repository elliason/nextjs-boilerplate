import { withTranslation } from '@utils/i18n';

const Footer = ({ t, ...props }) => {
    return (
        <div className="footer">
            <p>{t('footer.copyright')}</p>
        </div>
    );
};

export default withTranslation('common')(Footer);
