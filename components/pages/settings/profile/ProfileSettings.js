import { useIntl } from 'react-intl';
import Page from 'components/layout/Page';
import PageHeader from 'components/layout/PageHeader';
import ProfileDetails from './ProfileDetails';
import PasswordChangeButton from './PasswordChangeButton';
import { labels } from 'components/messages';

export default function ProfileSettings() {
  const { formatMessage } = useIntl();

  return (
    <Page>
      <PageHeader title={formatMessage(labels.profile)}>
        <PasswordChangeButton />
      </PageHeader>
      <ProfileDetails />
    </Page>
  );
}
