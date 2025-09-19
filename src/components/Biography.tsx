import { Avatar, Checkbox, Fieldset, ProgressBar, Tab, Tabs } from '@react95/core';

function Skill({ name, percent }: { name: string; percent: number }) {
  return (
    <div className="mb-3">
      <li className="resume-skills">{name}</li>
      <ProgressBar percent={percent} width="200px" />
    </div>
  );
}

function Biography() {
  return (
    <Tabs defaultActiveTab="About Me">
      {/* About Me Tab */}
      <Tab title="About Me">
        <Avatar src=".\src\assets\bio\self.png" size="400px" />
        <h2>Hello, I am Kevin Lam (林怡滉) 🐒</h2>

        <p>Fullstack Developer in the works</p>
        <Fieldset legend="My Journey So Far">
          <p>
            I have skills in front-end and back-end technologies, creating web applications for users to enjoy. My goal is to create new high-performance software that easy to use.
          </p>
        </Fieldset>
      </Tab>
      {/* Experiences Tab */}
      <Tab title="Experiences & Achievements">
        <Fieldset legend="Itron Inc. (Jan 2024 -  Dec 2024)">
          <div> <Checkbox readOnly checked />
            As a <strong>fullstack developer</strong> I designed and developed an inventory management system using <strong>MudBlazor, C#, and T-SQL</strong> ensuring efficient functionality and polished user interfaces.
          </div>
          <div> <Checkbox readOnly checked />
            Enhanced and maintained the <strong>Global Inventory Management</strong> platform, integrating <strong>LINQ</strong> for database queries and implementing tools to streamline workflows, such as automated job assignments for meter scanning.
          </div>
          <div> <Checkbox readOnly checked />
            Automated reporting processes by integrating <strong>Azure</strong> and <strong>Microsoft APIs</strong>, delivering daily diagnostic summaries to stakeholders via email.
          </div>
          <div> <Checkbox readOnly checked />
            Collaborated in an <strong>Agile environment</strong>, participating in daily stand-ups, weekly team meetings, and sprint planning, leveraging <strong>Azure DevOps</strong> for version control and CI/CD workflows.
          </div>
        </Fieldset>
        <Fieldset legend="NIWC-Atlantic (Aug 2025 - Present)">
          <div> <Checkbox readOnly checked />
            Developing and collaborating with the front-end team to create a professional development website utilizing <strong>TypeScript, React, Node.js</strong> and <strong>Tailwind CSS</strong>.
          </div>
          <div> <Checkbox readOnly checked />
            Leading the implementation of the AI/ML component, utilizing <strong>AWS services (Bedrock, S3 Bucket, Lambda, API Gateway, DynamoDB)</strong> to integrate <strong>RAG AI</strong> for personalized training recommendations and user interaction.
          </div>
        </Fieldset>
      </Tab>
      {/* Skills Tab */}
      <Tab title="My Arsenal of Skills and Tools">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <Fieldset legend="Core Languages & Frameworks">
            <ul>
              <Skill name="C++ | C# | C" percent={98} />
              <Skill name="Java" percent={95} />
              <Skill name="Python" percent={90} />
              <Skill name="TypeScript | JavaScript" percent={92} />
              <Skill name="T-SQL | PL/SQL" percent={87} />
              <Skill name=".NET (MudBlazor, ASP.NET)" percent={92} />
            </ul>
          </Fieldset>
          <Fieldset legend="Styling & UI Craft">
            <ul>
              <Skill name="HTML5 & CSS" percent={90} />
              <Skill name="Tailwind CSS" percent={88} />
              <Skill name="React | Node.js" percent={85} />
            </ul>
          </Fieldset>
          <Fieldset legend="Development & Operations">
            <ul>
              <Skill name="Git & GitHub" percent={99} />
              <Skill name="Azure & Azure DevOps" percent={88} />
              <Skill name="AWS (Lambda, API Gateway, DynamoDB)" percent={85} />
              <Skill name="AWS (Bedrock, Comprehend, S3)" percent={80} />
              <Skill name="Jira | BitBucket" percent={80} />
            </ul>
          </Fieldset>
        </div>
      </Tab>
      {/* Other/Miscellaneous Tab */}
      <Tab title="Smaller Additions">
        <Fieldset legend="Undergraduate Involvements">
          <div>
            <p>
              For the Asian Student Association club at Clemson University, I served as the <strong>Event Coordinator</strong> where I organized cultural events and activities to promote Asian culture on campus. 
              I negotiated partnerships with local businesses to secure collaborative events.
            </p>
          </div>
        </Fieldset>
        <Fieldset legend="Hobbies & Interests">
          <div>
            <p>
              I love to play video games and basketball with my friends. I also enjoy hiking and exploring nature trails whenever I get the chance.
            </p>
          </div>
        </Fieldset>
      </Tab>
    </Tabs>
  );
}

export default Biography;