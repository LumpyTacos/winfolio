import { Avatar, Checkbox, Fieldset, ProgressBar, Tab, Tabs } from '@react95/core';

function Biography() {
  return (
    <Tabs defaultActiveTab="About Me">
      {/* About Me Tab */}
      <Tab title="About Me">
        <h3>Hello, I am Kevin Lam (林怡滉) 🐒</h3>
        <Avatar src="./src/assets/bio/self.png" size="400px" />

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
          <Checkbox readOnly checked>
            As a <strong>fullstack developer</strong> I designed and developed an inventory management system using <strong>MudBlazor, C#, and T-SQL</strong> ensuring efficient functionality and polished user interfaces.
          </Checkbox>
          <Checkbox readOnly checked>
            Enhanced and maintained the <strong>Global Inventory Management</strong> platform, integrating <strong>LINQ</strong> for database queries and implementing tools to streamline workflows, such as automated job assignments for meter scanning.
          </Checkbox>
          <Checkbox readOnly checked>
            Automated reporting processes by integrating <strong>Azure</strong> and <strong>Microsoft APIs</strong>, delivering daily diagnostic summaries to stakeholders via email.
          </Checkbox>
          <Checkbox readOnly checked>
            Collaborated in an <strong>Agile environment</strong>, participating in daily stand-ups, weekly team meetings, and sprint planning, leveraging <strong>Azure DevOps</strong> for version control and CI/CD workflows.
          </Checkbox>
        </Fieldset>
        <Fieldset legend="NIWC-Atlantic (Aug 2025 - Present)">
          <Checkbox readOnly checked>
            Developing and collaborating with the front-end team to create a professional development website utilizing <strong>TypeScript, React, Node.js</strong> and <strong>Tailwind CSS</strong>.
          </Checkbox>
          <Checkbox readOnly checked>
            Leading the implementation of the AI/ML component, utilizing <strong>AWS services (Bedrock, S3 Bucket, Lambda, API Gateway, DynamoDB)</strong> to integrate <strong>RAG AI</strong> for personalized training recommendations and user interaction.
          </Checkbox>
        </Fieldset>
      </Tab>
      {/* Skills Tab */}
      <Tab title="My Arsenal of Skills and Tools">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <Fieldset legend="Core Languages & Frameworks">
            <ul>
              <li className="resume-skills">C++ | C# | C</li>
              <ProgressBar percent={98} width="200px" />
              <li className="resume-skills">Java</li>
              <ProgressBar percent={95} width="200px" />
              <li className="resume-skills">Python</li>
              <ProgressBar percent={90} width="200px" />
              <li className="resume-skills">TypeScript | JavaScript</li>
              <ProgressBar percent={92} width="200px" />
              <li className="resume-skills">T-SQL | PL/SQL</li>
              <ProgressBar percent={87} width="200px" />
              <li className="resume-skills">.NET (MudBlazor, ASP.NET)</li>
              <ProgressBar percent={92} width="200px" />
            </ul>
          </Fieldset>
          <Fieldset legend="Styling & UI Craft">
            <ul>
              <li className="resume-skills">HTML5 & CSS</li>
              <ProgressBar percent={90} width="200px" />
              <li className="resume-skills">Tailwind CSS</li>
              <ProgressBar percent={88} width="200px" />
              <li className="resume-skills">React | Node.js</li>
              <ProgressBar percent={85} width="200px" />
            </ul>
          </Fieldset>
          <Fieldset legend="Development & Operations">
            <ul>
              <li className="resume-skills">Git & GitHub</li>
              <ProgressBar percent={99} width="200px" />
              <li className="resume-skills">Azure & Azure DevOps</li>
              <ProgressBar percent={88} width="200px" />
              <li className="resume-skills">AWS (Lambda, API Gateway, DynamoDB)</li>
              <ProgressBar percent={85} width="200px" />
              <li className="resume-skills">AWS (Bedrock, Comprehend, S3)</li>
              <ProgressBar percent={80} width="200px" />
              <li className="resume-skills">Jira | BitBucket</li>
              <ProgressBar percent={80} width="200px" />
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