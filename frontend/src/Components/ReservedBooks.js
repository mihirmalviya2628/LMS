import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h className='reservedbooks-title'>Books On Hold</h>
            <table className='reservedbooks-table'>
                <tr>
                    <th>Name</th>
                    <th>Enrollement</th>
                    <th>Book</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>Mihir Malviya</td>
                    <td>0827CS211149</td>
                    <td>Rich Dad Poor Dad</td>
                    <td>29/10/2023</td>
                </tr>
                <tr>

                    <td>Paridhi</td>
                    <td>0827CS211169</td>
                    <td>The Subtle Art</td>
                    <td>29/10/2023</td>
                </tr>
                <tr>
                    <td>Mehak Pandey</td>
                    <td>0827CS211148</td>
                    <td>Wings Of Fire</td>
                    <td>15/10/2023</td>
                </tr>
                <tr>
                    <td>Akhil</td>
                    <td>0827CS211134</td>
                    <td>The Secret</td>
                    <td>02/9/2021</td>
                </tr>
                <tr>
                    <td>Surya</td>
                    <td>0827CS211173</td>
                    <td>Bad Guys</td>
                    <td>21/7/2021</td>
                </tr>
                <tr>
                    <td>Dinesh</td>
                    <td>0827CS211140</td>
                    <td>Giovanni Rovelli</td>
                    <td>02/7/2021</td>
                </tr>
            </table>
        </div>
    )
}

export default ReservedBooks
