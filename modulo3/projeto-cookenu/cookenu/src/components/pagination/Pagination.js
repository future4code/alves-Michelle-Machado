import React from "react";
import * as C from './styled'

export const PaginationComponent = ({ pages, currentPage, setCurrentPage }) => {

    return (
        <div>
            {/* {Array.from(Array(pages), (item, index) => {
                return (
                    <C.Button
                        style={index === currentPage ? {backgroundColor : '#ff105f'} : null}
                        value={index}
                        onClick={(e) => setCurrentPage(Number(e.target.value))}>
                        {index + 1}
                    </C.Button>
                )
            })} */}
        </div>
    )

}