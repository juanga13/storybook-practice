import { Space } from 'antd'
import './App.css'
import { SiriusText } from './components/base/SiriusText/SiriusText'
import { ConfigProvider } from 'antd'

function App() {

    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorPrimary: '#081924',
                    },
                    // Input: {
                    //     colorPrimary: '#eb2f96',
                    // }
                },
            }}
        >
            <Space>
                <SiriusText>{`Welcome to Juanga's Storybook Practice!`}</SiriusText>
            </Space>
        </ConfigProvider>
    )
}

export default App
