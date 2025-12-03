import React from 'react';
import Layout from '@theme/Layout';
import AiAssistant from '../components/AiAssitant';

const AiAssistantPage = () => {
  return (
    <Layout title="AI Assistant">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 120px)',
        }}
      >
        <AiAssistant />
      </div>
    </Layout>
  );
};

export default AiAssistantPage;
