import { PDFViewer as PDFViewerComponent, ScrollStrategy, ZoomMode } from '@embedpdf/react-pdf-viewer'

type PDFViewerProps = {
    file: string
}

const DISABLED_CATEGORIES = [
    'annotation', 
    'redaction', 
    'insert', 
    'panel', 
    'form', 
    'zoom', 
    'document-close', 
    'document-open',
]

export const PDFViewer = ({ file }: PDFViewerProps) => (
    <div 
        className='h-110 sm:h-130 md:h-150 lg:h-180 overflow-hidden min-w-30 shrink-0 grow-0 basis-full rounded-xl border border-gray-300 shadow-lg dark:border-gray-700'
        onWheel={(e) => e.stopPropagation()}
    >
        <PDFViewerComponent 
            className='h-full w-full outline-none'
            config={{
                src: file,
                theme: { preference: 'dark' },
                disabledCategories: DISABLED_CATEGORIES,
                scroll: {
                    defaultStrategy: ScrollStrategy.Vertical,
                    defaultPageGap:1
                },
                zoom: {
                    defaultZoomLevel: ZoomMode.FitWidth,
                    minZoom: 0.4,
                    maxZoom: 1.2
                },
                viewport:{
                    viewportGap:20
                },
                export: {
                    defaultFileName: import.meta.env.VITE_FILE_NAME_EXPORT
                }
            }}
        />
    </div>
)
