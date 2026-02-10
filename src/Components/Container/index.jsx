import "./container.css"

export const Container = ({children, dataAttribute}) => {
    return (
        <section id="container" data-container={dataAttribute}>
            {children}
        </section>
    )
}