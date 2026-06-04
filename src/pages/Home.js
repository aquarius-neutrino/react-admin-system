import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

export default function Home() {
  const chartRef = useRef(null)

  useEffect(() => {
    const chart = echarts.init(chartRef.current)
    chart.setOption({
      title: { text: '近7日营收趋势' },
      xAxis: { data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] },
      yAxis: {},
      series: [{
        type: 'line',
        data: [1200, 1600, 900, 2100, 2400, 2800, 3200],
        smooth: true
      }]
    })
  }, [])

  return (
    <div>
      <h2>数据看板</h2>
      <div ref={chartRef} style={{ width: '100%', height: 400, background: '#fff', padding: 20, borderRadius: 10 }} />
    </div>
  )
}