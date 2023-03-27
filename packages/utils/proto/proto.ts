/* eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars */
import * as $protobuf from 'protobufjs/light'

const $root = (
  $protobuf.roots.default || ($protobuf.roots.default = new $protobuf.Root())
).addJSON({
  GridGeometrySurface: {
    fields: {
      cellIndexes: {
        rule: 'repeated',
        type: 'uint32',
        id: 1
      },
      polygonIndexes: {
        rule: 'repeated',
        type: 'uint32',
        id: 2
      },
      vertexX: {
        rule: 'repeated',
        type: 'double',
        id: 3
      },
      vertexY: {
        rule: 'repeated',
        type: 'double',
        id: 4
      },
      vertexZ: {
        rule: 'repeated',
        type: 'double',
        id: 5
      }
    }
  },
  GridStaticProperty: {
    fields: {
      id: {
        type: 'int64',
        id: 1
      },
      owner: {
        type: 'int64',
        id: 2
      },
      name: {
        type: 'string',
        id: 3
      },
      unit: {
        type: 'string',
        id: 4
      },
      minValue: {
        type: 'double',
        id: 5
      },
      maxValue: {
        type: 'double',
        id: 6
      },
      values: {
        rule: 'repeated',
        type: 'double',
        id: 7
      }
    }
  },
  ObjectMeta: {
    fields: {
      id: {
        type: 'int64',
        id: 1
      },
      ownerId: {
        type: 'int64',
        id: 2
      },
      name: {
        type: 'string',
        id: 3
      },
      objectType: {
        type: 'int32',
        id: 4
      }
    }
  },
  TraceHeaderInfo: {
    fields: {
      line: {
        type: 'int32',
        id: 1
      },
      cdp: {
        type: 'int32',
        id: 2
      },
      x: {
        type: 'double',
        id: 3
      },
      y: {
        type: 'double',
        id: 4
      }
    }
  },
  Survey: {
    fields: {
      name: {
        type: 'string',
        id: 1
      },
      p1: {
        type: 'TraceHeaderInfo',
        id: 2
      },
      p2: {
        type: 'TraceHeaderInfo',
        id: 3
      },
      p3: {
        type: 'TraceHeaderInfo',
        id: 4
      }
    }
  },
  SurveyObject: {
    fields: {
      meta: {
        type: 'ObjectMeta',
        id: 1
      },
      survey: {
        type: 'Survey',
        id: 2
      }
    }
  },
  Seismic: {
    fields: {
      name: {
        type: 'string',
        id: 1
      },
      lineMin: {
        type: 'int32',
        id: 2
      },
      lineMax: {
        type: 'int32',
        id: 3
      },
      cdpMin: {
        type: 'int32',
        id: 4
      },
      cdpMax: {
        type: 'int32',
        id: 5
      },
      traceSample: {
        type: 'int32',
        id: 6
      },
      depthStart: {
        type: 'double',
        id: 7
      },
      depthInterval: {
        type: 'double',
        id: 8
      },
      depthUnit: {
        type: 'string',
        id: 9
      },
      valueUnit: {
        type: 'string',
        id: 10
      },
      valueType: {
        type: 'string',
        id: 11
      },
      traceHeaderList: {
        rule: 'repeated',
        type: 'TraceHeaderInfo',
        id: 12
      },
      minValue: {
        type: 'double',
        id: 13
      },
      maxValue: {
        type: 'double',
        id: 14
      }
    }
  },
  SeismicHorizonPoint: {
    fields: {
      line: {
        type: 'int32',
        id: 1
      },
      cdp: {
        type: 'int32',
        id: 2
      },
      xcoord: {
        type: 'double',
        id: 3
      },
      ycoord: {
        type: 'double',
        id: 4
      },
      depth: {
        type: 'double',
        id: 5
      }
    }
  },
  SeismicHorizonPointList: {
    fields: {
      points: {
        rule: 'repeated',
        type: 'SeismicHorizonPoint',
        id: 1
      }
    }
  },
  SeismicHorizonInfo: {
    fields: {
      meta: {
        type: 'ObjectMeta',
        id: 1
      },
      lineMin: {
        type: 'int32',
        id: 2
      },
      lineMax: {
        type: 'int32',
        id: 3
      },
      cdpMin: {
        type: 'int32',
        id: 4
      },
      cdpMax: {
        type: 'int32',
        id: 5
      }
    }
  },
  SeismicHorizonObject: {
    fields: {
      Info: {
        type: 'SeismicHorizonInfo',
        id: 1
      },
      data: {
        type: 'SeismicHorizonPointList',
        id: 2
      }
    }
  },
  SeismicFaultInfo: {
    fields: {
      meta: {
        type: 'ObjectMeta',
        id: 1
      },
      lineMin: {
        type: 'int32',
        id: 2
      },
      lineMax: {
        type: 'int32',
        id: 3
      },
      cdpMin: {
        type: 'int32',
        id: 4
      },
      cdpMax: {
        type: 'int32',
        id: 5
      }
    }
  },
  SeismicFaultPoint: {
    fields: {
      line: {
        type: 'int32',
        id: 1
      },
      cdp: {
        type: 'int32',
        id: 2
      },
      xcoord: {
        type: 'double',
        id: 3
      },
      ycoord: {
        type: 'double',
        id: 4
      },
      depth: {
        type: 'double',
        id: 5
      },
      seqId: {
        type: 'int32',
        id: 6
      }
    }
  },
  SeismicFaultPointList: {
    fields: {
      points: {
        rule: 'repeated',
        type: 'SeismicFaultPoint',
        id: 1
      }
    }
  },
  SeismicFaultObject: {
    fields: {
      Info: {
        type: 'SeismicFaultInfo',
        id: 1
      },
      data: {
        type: 'SeismicFaultPointList',
        id: 2
      }
    }
  },
  SeismicObject: {
    fields: {
      meta: {
        type: 'ObjectMeta',
        id: 1
      },
      seismic: {
        type: 'Seismic',
        id: 2
      }
    }
  },
  TraceData: {
    fields: {
      traceHeader: {
        type: 'TraceHeaderInfo',
        id: 1
      },
      data: {
        rule: 'repeated',
        type: 'double',
        id: 2
      }
    }
  },
  SegyDataIndex: {
    fields: {
      dataFormat: {
        type: 'DataFormat',
        id: 1
      },
      lineIndex: {
        type: 'int32',
        id: 2
      },
      cdpIndex: {
        type: 'int32',
        id: 3
      },
      xIndex: {
        type: 'int32',
        id: 4
      },
      yIndex: {
        type: 'int32',
        id: 5
      },
      startIndex: {
        type: 'int32',
        id: 6
      },
      scaleIndex: {
        type: 'int32',
        id: 7
      }
    },
    nested: {
      DataFormat: {
        values: {
          IEEE_FLOAT: 0,
          IBM_FLOAT: 1
        }
      }
    }
  },
  SegyDataQuery: {
    fields: {
      dataType: {
        type: 'DataType',
        id: 1
      },
      line: {
        type: 'int32',
        id: 2
      },
      cdp: {
        type: 'int32',
        id: 3
      },
      arbitraryLine: {
        type: 'int64',
        id: 4
      }
    },
    nested: {
      DataType: {
        values: {
          LINE: 0,
          CDP: 1,
          ARBITRARY_LINE: 2
        }
      }
    }
  },
  SegyData: {
    fields: {
      data: {
        rule: 'repeated',
        type: 'TraceData',
        id: 1
      }
    }
  },
  TraceDataList: {
    fields: {
      Traces: {
        rule: 'repeated',
        type: 'TraceData',
        id: 1
      }
    }
  },
  TraceIdList: {
    fields: {
      TraceIds: {
        rule: 'repeated',
        type: 'int32',
        id: 1
      }
    }
  },
  SurveyObjectList: {
    fields: {
      Surveys: {
        rule: 'repeated',
        type: 'SurveyObject',
        id: 1
      }
    }
  },
  WellTrajectory: {
    fields: {
      name: {
        type: 'string',
        id: 1
      },
      topX: {
        type: 'double',
        id: 2
      },
      topY: {
        type: 'double',
        id: 3
      },
      bottomX: {
        type: 'double',
        id: 4
      },
      bottomY: {
        type: 'double',
        id: 5
      },
      kb: {
        type: 'double',
        id: 6
      },
      dxs: {
        rule: 'repeated',
        type: 'double',
        id: 7
      },
      dys: {
        rule: 'repeated',
        type: 'double',
        id: 8
      },
      mds: {
        rule: 'repeated',
        type: 'double',
        id: 9
      },
      tvds: {
        rule: 'repeated',
        type: 'double',
        id: 10
      }
    }
  },
  WellTrajectoryList: {
    fields: {
      trajectoryList: {
        rule: 'repeated',
        type: 'WellTrajectory',
        id: 1
      }
    }
  }
})

export default $root
