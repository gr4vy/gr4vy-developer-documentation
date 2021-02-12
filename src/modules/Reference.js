import React, { useRef } from "react"
import { RedocStandalone } from "redoc"
import "./reference.css"

const Reference = ({ specUrl }) => {
  const ref = useRef()

  const openTags = () => {
    ref.current.querySelectorAll("[role=navigation] ul").forEach(element => {
      element.style.display = "block"
    })
  }

  return (
    <div className='gr4vy__reference' ref={ref}>
      <RedocStandalone
        specUrl={specUrl}
        onLoaded={openTags}
        options={{
          disableSearch: true,
          hideDownloadButton: true,
          hideSingleRequestSampleTab: true,
          expandSingleSchemaField: true,
          jsonSampleExpandLevel: 3,
          hideSchemaTitles: true,
          simpleOneOfTypeLabel: true,
          noAutoAuth: true,
          onlyRequiredInSamples: true,
          pathInMiddlePanel: true,
          requiredPropsFirst: true,
          scrollYOffset: 60,
          sortPropsAlphabetically: true,
          theme: {
            spacing: {
              sectionVertical: ({ spacing }) => spacing.unit * 3,
            },
            colors: {
              primary: {
                main: "#368871"
              }
            },
            typography: {
              fontSize: "16px",
              fontFamily: "system-ui, -apple-system, \"Segoe UI\", Roboto, Ubuntu, Cantarell, \"Noto Sans\", sans- serif, system- ui, \"Segoe UI\", Helvetica, Arial, sans- serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
            },
            sidebar: {
              width: "300px",
            },
            rightPanel: {
              backgroundColor: "#03271d"
            },
          }
        }}
      />
    </div>
  )
}

export default Reference