import { Project } from '../../types';

export const DEV_DATA: Project[] = [
  {
    id: 'dev1',
    common: {
      category: 'Development',
      image: '', // Placeholder
      icon: 'message-circle',
      websiteUrl: 'https://wechat-msganalysis-krgkfhfdcxwmtwst4jc4bw.streamlit.app/',
      githubUrl: 'https://github.com/LuN3cy/WeChat-MsgAnalysis'
    },
    zh: {
      title: '微信聊天记录数据分析',
      subtitle: 'Python / Streamlit',
      description: '对json格式的聊天记录进行完整的分析，包含时段、内容和互动模式。',
      role: '全栈开发',
      tags: ['Python', 'Streamlit', '数据分析'],
      roleDetail: "独立完成后端数据处理逻辑与前端可视化界面开发。"
    },
    en: {
      title: 'WeChat Msg Analysis',
      subtitle: 'Python / Streamlit',
      description: 'Comprehensive analysis of JSON chat records, including time slots, content, and interaction patterns.',
      role: 'Full Stack Developer',
      tags: ['Python', 'Streamlit', 'Data Analysis'],
      roleDetail: "Independently completed backend data processing logic and frontend visualization interface development."
    }
  },
  {
    id: 'dev2',
    common: {
      category: 'Development',
      image: '', // Placeholder
      icon: 'id-card',
      websiteUrl: 'https://lun3cy.github.io/LUNA-Badge/',
      githubUrl: 'https://github.com/LuN3cy/LUNA-Badge'
    },
    zh: {
      title: '工牌生成器',
      subtitle: 'React / Tailwind',
      description: '具有设计感的自定义工牌生成应用。',
      role: '前端开发',
      tags: ['React', 'Tailwind CSS', '工具'],
      roleDetail: "独立完成前端界面设计与功能实现。"
    },
    en: {
      title: 'LUNA-Badge Generator',
      subtitle: 'React / Tailwind',
      description: 'A designer badge generator application with custom styles.',
      role: 'Frontend Developer',
      tags: ['React', 'Tailwind CSS', 'Tool'],
      roleDetail: "Independently completed frontend interface design and function implementation."
    }
  }
];
