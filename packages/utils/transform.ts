import { PLOT_INTERVAL, PLOT_START } from '@/constants/plot'
import { Vector3 } from '@int/geotoolkit3d/THREE'
import protoRoot from '@/proto/proto'

// 转换后点坐标
let tempResult: Vector3 | null
export function getTransformPoint(
  point: Vector3,
  rect: { start: Vector3; end: Vector3 }
) {
  if (!tempResult) {
    // 工区范围
    const rStart = new Vector3(rect.start.x, rect.start.y, rect.start.z)
    const rEnd = new Vector3(rect.end.x, rect.end.y, rect.end.z)
    // xyz比例系数, PLOT_START： PLOT起始点，PLOT_INTERVAL：PLOT_END-PLOT_START
    tempResult = new Vector3(1, 1, 1)
      .divide(rEnd.sub(rStart))
      .multiply(PLOT_INTERVAL)
      .add(PLOT_START)
  }
  return point.sub(rect.start).multiply(tempResult)
}
export function resetTempResult() {
  tempResult = null
}

// 批量点转换
let tempArr: Vector3 | null
export function getTransformArr(zArr, yArr, xArr, rect) {
  if (!tempArr) {
    // 获取边界范围
    const x = rect.end.x - rect.start.x
    const y = rect.end.y - rect.start.y
    const z = rect.end.z - rect.start.z
    tempArr = new Vector3(x, y, z)
  }
  const x: number[] = []
  const y: number[] = []
  const z: number[] = []
  // 计算每个差值在工区内所代表的大小
  for (let i = 0; i < xArr.length; i += 1) {
    x.push((xArr[i] / tempArr.x) * PLOT_INTERVAL.x)
    y.push((yArr[i] / tempArr.y) * PLOT_INTERVAL.y)
    z.push((zArr[i] / tempArr.z) * PLOT_INTERVAL.z)
  }
  return [x, y, z]
}
export function resetTempArr() {
  tempArr = null
}

// 切割多边形
// polygonIndexes 矩形集合,
// indices 返回新生成的下标
export function cuttingPolygon(polygonIndexes: number[]) {
  if (polygonIndexes.length < 3) return
  const indices: number[] = []
  // 每个polygon的点个数
  const polygonPointsNumber: number[] = []
  // 对所有的polygonIndexes进行遍历
  for (let i = 0; i < polygonIndexes.length - 1; i += 1) {
    // 矩形起始点
    const start = polygonIndexes[i]
    const end = polygonIndexes[i + 1]
    polygonPointsNumber.push(end - start)
    for (let j = start; j < end - 2; j += 1) {
      indices.push(start, j + 1, j + 2)
    }
  }
  return [indices, polygonPointsNumber]
}

// 转换二进制流 -> 数组
export function getTransformBinary(data, key: string) {
  const resContent = new Uint8Array(data)
  const dataGeo = protoRoot.lookup(key).decode(resContent)
  return dataGeo
}
