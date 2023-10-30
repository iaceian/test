const data = {
  conditionalRowStyles: [
    {
      when: (row) => row.id % 2 === 0,
      style: (row) => ({ backgroundColor: '#3a4f57' }),
    },
  ],
  columns1: [
    { name: 'Rank'   , selector: (row) => row.rank                    },
    { name: 'Name'   , selector: (row) => row.name , width: '200px'   },
    { name: 'Rtg'    , selector: (row) => row.rtg                     },
    { name: 'Score'  , selector: (row) => row.score                   },
    { name: 'Res'    , selector: (row) => row.res                     },
    { name: 'BH1'    , selector: (row) => row.bh1                     },
    { name: 'Prizes' , selector: (row) => row.prizes , width: '200px' },
  ],
  rows1: [
		{ id: 1001 , rank: '1st'  , name: 'AGM Srihaan Poddar'       , rtg: '1874' , score: '6.0' , res: ''  , bh1: '31'   , prizes: 'P3000 + Trophy + Gold Medal' },
		{ id: 1002 , rank: '2nd'  , name: 'Ruther Barredo'           , rtg: '1949' , score: '6.0' , res: ''  , bh1: '26'   , prizes: 'P2000 + Silver Medal'        },
		{ id: 1003 , rank: '3rd'  , name: 'Andrew Sopungco'          , rtg: '1873' , score: '5.5' , res: '1' , bh1: '28.5' , prizes: 'P1500 + Bronze Medal'        },
		{ id: 1004 , rank: '4th'  , name: 'Jet Miguel Mendoza'       , rtg: '1836' , score: '5.5' , res: '0' , bh1: '31.5' , prizes: 'P1000 + Bronze Medal'        },
		{ id: 1005 , rank: '5th'  , name: 'Charles Vincent Galpo'    , rtg: '1693' , score: '5.0' , res: ''  , bh1: '31'   , prizes: 'P750 + Bronze Medal'         },
		{ id: 1006 , rank: '6th'  , name: 'Von Cedric Rañola'        , rtg: '1896' , score: '5.0' , res: ''  , bh1: '30.5' , prizes: 'P500 + Bronze Medal'         },
		{ id: 1007 , rank: '7th'  , name: 'Ivan Travis Cu'           , rtg: '1676' , score: '5.0' , res: ''  , bh1: '29'   , prizes: 'P500 + Bronze Medal'         },
		{ id: 1008 , rank: '8th'  , name: 'Jericho Winston Cu'       , rtg: '1538' , score: '5.0' , res: ''  , bh1: '25.5' , prizes: 'P500 + Bronze Medal'         },
		{ id: 1009 , rank: '9th'  , name: 'James Riehyl Baligat'     , rtg: '1702' , score: '5.0' , res: ''  , bh1: '24.5' , prizes: 'P500 + Bronze Medal'         },
		{ id: 1010 , rank: '10th' , name: 'Steven Paul Ramirez'      , rtg: ''     , score: '4.5' , res: ''  , bh1: '26'   , prizes: 'P500 + Bronze Medal'         },
		{ id: 1011 , rank: '11th' , name: 'John Andrei Abrantes'     , rtg: ''     , score: ''    , res: ''  , bh1: ''     , prizes: 'Bronze Medal'                },
		{ id: 1012 , rank: '12th' , name: 'Joshua Maven Ching'       , rtg: ''     , score: ''    , res: ''  , bh1: ''     , prizes: 'Bronze Medal'                },
		{ id: 1013 , rank: '13th' , name: 'John Jorel Solidum'       , rtg: ''     , score: ''    , res: ''  , bh1: ''     , prizes: 'Bronze Medal'                },
		{ id: 1014 , rank: '14th' , name: 'Marcus Aurelius Macainag' , rtg: ''     , score: ''    , res: ''  , bh1: ''     , prizes: 'Bronze Medal'                },
		{ id: 1015 , rank: '15th' , name: 'Paul Laurence Payte'      , rtg: ''     , score: ''    , res: ''  , bh1: ''     , prizes: 'Bronze Medal'                },
		{ id: 1016 , rank: '16th' , name: 'Santino Ezekiel Abrantes' , rtg: ''     , score: ''    , res: ''  , bh1: ''     , prizes: 'Bronze Medal'                },
		{ id: 1017 , rank: '17th' , name: 'Kyle Ethan Dy'            , rtg: ''     , score: ''    , res: ''  , bh1: ''     , prizes: 'Bronze Medal'                },
		{ id: 1018 , rank: '18th' , name: 'Brian Gabriel Payte'      , rtg: ''     , score: ''    , res: ''  , bh1: ''     , prizes: 'Bronze Medal'                },
		{ id: 1019 , rank: '19th' , name: 'Macus Gawaine Lumbis'     , rtg: ''     , score: ''    , res: ''  , bh1: ''     , prizes: 'Bronze Medal'                },
		{ id: 1020 , rank: '20th' , name: 'Adriyel Joseph Guarte'    , rtg: ''     , score: ''    , res: ''  , bh1: ''     , prizes: 'Bronze Medal'                },
	],
  columns2: [
    { name: 'Award'  , selector: (row) => row.award   },
    { name: 'Name'   , selector: (row) => row.name    },
    { name: 'Prizes' , selector: (row) => row.prizes  },
  ],
  rows2: [
		{ id: 1001 , award: 'Top Milo Checkmate Performer High School' , name: 'Jet Miguel Mendoza'       , prizes: 'Trophy'     },
		{ id: 1002 , award: 'Top Milo Checkmate Performer Elementary'  , name: 'Santino Ezekiel Abrantes' , prizes: 'Trophy'     },
		{ id: 1003 , award: 'Top Lady'                                 , name: 'Angela Camella Butial'    , prizes: 'Gold Medal' },
		{ id: 1004 , award: 'Top 12-under'                             , name: 'Srihaan Poddar'           , prizes: 'Gold Medal' },
		{ id: 1005 , award: 'Top 10-under'                             , name: 'Ivan Travis Cu'           , prizes: 'Gold Medal' },
		{ id: 1006 , award: 'Top 8-under'                              , name: 'Karl Zachary Fajardo'     , prizes: 'Gold Medal' },
		{ id: 1007 , award: 'Youngest Participant'                     , name: 'Jaden Lawrence Yusiong'   , prizes: 'Gold Medal' },
	]
}

export default data