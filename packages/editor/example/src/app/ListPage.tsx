import React from 'react'
import { Input, Button, Badge, Card, TimePicker } from 'antd'
import 'antd/lib/input/style/css'
import _Button from '@/materials/button'

export default function ListPage(props: any) {
  return (
    <div>
      <_Button type="default">按钮</_Button>
      <_Button type="default">按钮</_Button>
      <h1 title={'abc'}>
        ListPage
        <Button type="default">
          按钮
          <Badge count={5}>
            <span>fsf</span>
          </Badge>
        </Button>
      </h1>
      <Card style={{ width: 300 }}></Card>
      <Input placeholder="请输入" />
      <p>content</p>
      <TimePicker />
      <Button type="default">按钮</Button>
    </div>
  )
}