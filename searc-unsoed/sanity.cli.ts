import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ysfgpfcw',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
  }
})
