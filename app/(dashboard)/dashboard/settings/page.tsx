import ResponsiveContainer from '~/components/ResponsiveContainer';
import Section from '~/components/layout/Section';
import PageHeader from '~/components/ui/typography/PageHeader';
import Paragraph from '~/components/ui/typography/Paragraph';
import ResetButton from '../_components/ResetButton';
import AnalyticsButton from '../_components/AnalyticsButton';
import { Suspense } from 'react';
import RecruitmentTestSection from '../_components/RecruitmentTestSection';
import SettingsSection from '~/components/layout/SettingsSection';
import RecruitmentSwitch from '~/components/RecruitmentSwitch';

export default function Settings() {
  return (
    <>
      <ResponsiveContainer>
        <PageHeader
          headerText="Settings"
          subHeaderText="Here you can configure your installation of Fresco."
        />
      </ResponsiveContainer>
      <ResponsiveContainer className="gap-4">
        <SettingsSection
          heading="Anonymous Recruitment"
          controlArea={<RecruitmentSwitch />}
        >
          <Paragraph variant="noMargin">
            If anonymous recruitment is enabled, you may generate an anonymous
            participation URL. This URL can be shared with participants to allow
            them to self-enroll in your study.
          </Paragraph>
        </SettingsSection>
        <SettingsSection heading="Reset Settings" controlArea={<ResetButton />}>
          <Paragraph variant="noMargin">
            Project settings allow you to configure the project name, and other
            metadata.
          </Paragraph>
        </SettingsSection>
        <SettingsSection
          heading="Send Test Analytics Event"
          controlArea={<AnalyticsButton />}
        >
          <Paragraph variant="noMargin">
            This will send a test analytics event to the Fresco analytics
            server.
          </Paragraph>
        </SettingsSection>
        <RecruitmentTestSection />
      </ResponsiveContainer>
    </>
  );
}
