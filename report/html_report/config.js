report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document.png",
        "test": "..\\bitmaps_test\\20210322-142628\\Entire_document.png",
        "selector": "document",
        "fileName": "Entire_document.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -841
          },
          "misMatchPercentage": "4.85",
          "analysisTime": 107
        },
        "diffImage": "..\\bitmaps_test\\20210322-142628\\failed_diff_Entire_document.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\H1_heading.png",
        "test": "..\\bitmaps_test\\20210322-142628\\H1_heading.png",
        "selector": "h1",
        "fileName": "H1_heading.png",
        "label": "H1 heading",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 667,
            "height": -246
          },
          "misMatchPercentage": "7.49",
          "analysisTime": 101
        },
        "diffImage": "..\\bitmaps_test\\20210322-142628\\failed_diff_H1_heading.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\H2_heading.png",
        "test": "..\\bitmaps_test\\20210322-142628\\H2_heading.png",
        "selector": "h2:first-of-type",
        "fileName": "H2_heading.png",
        "label": "H2 heading",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 667,
            "height": -249
          },
          "misMatchPercentage": "6.37",
          "analysisTime": 102
        },
        "diffImage": "..\\bitmaps_test\\20210322-142628\\failed_diff_H2_heading.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Paragraph.png",
        "test": "..\\bitmaps_test\\20210322-142628\\Paragraph.png",
        "selector": "p:first-of-type",
        "fileName": "Paragraph.png",
        "label": "Paragraph",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -667,
            "height": -4
          },
          "misMatchPercentage": "32.93",
          "analysisTime": 111
        },
        "diffImage": "..\\bitmaps_test\\20210322-142628\\failed_diff_Paragraph.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Ordered_list.png",
        "test": "..\\bitmaps_test\\20210322-142628\\Ordered_list.png",
        "selector": "ol:first-of-type",
        "fileName": "Ordered_list.png",
        "label": "Ordered list",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 667,
            "height": -206
          },
          "misMatchPercentage": "22.36",
          "analysisTime": 90
        },
        "diffImage": "..\\bitmaps_test\\20210322-142628\\failed_diff_Ordered_list.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Articles_17_to_30_link.png",
        "test": "..\\bitmaps_test\\20210322-142628\\Articles_17_to_30_link.png",
        "selector": "a:first-of-type",
        "fileName": "Articles_17_to_30_link.png",
        "label": "Articles 17 to 30 link",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -233,
            "height": -249
          },
          "misMatchPercentage": "2.02",
          "analysisTime": 33
        },
        "diffImage": "..\\bitmaps_test\\20210322-142628\\failed_diff_Articles_17_to_30_link.png"
      },
      "status": "fail"
    }
  ]
});