import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { Button } from "@taroify/core"
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button color="primary">主要按钮</Button>
      </View>
    )
  }
}
