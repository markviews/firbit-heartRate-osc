function ConnectionSettings(props) {
  return (
    <Page>
      <Section title={<Text bold align="center">Settings</Text>}>
        <TextInput label="IP Address" settingsKey="ipAddress"/>
        <TextInput label="Port" settingsKey="port"/>
      </Section>
    </Page>
  );
}

registerSettingsPage(ConnectionSettings);