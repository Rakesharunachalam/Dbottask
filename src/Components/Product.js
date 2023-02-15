import React from 'react'

function Product() {

  return (
    <div className='container'>
      <div className='products'>
        <h1 className='product-head'>
          Product Details
        </h1>
        <button className='btn-share'>Share</button>
        <button className='btn-import'>Import</button>
        <button id='downloadExcel' className='btn-export'>Export</button>
        <script src='table2excel.js'></script>
        
        <table id='product-table' className='product-table'>
          <thead className='thead'>
            <tr>
              <td><b>Item</b></td>
              <td><b>Add</b></td>
              <td><b>Image</b></td>
              <td><b>Name</b></td>
              <td><b>A</b></td>
              <td><b>B</b></td>
              <td><b>C</b></td>
              <td><b>D</b></td>
              <td><b>E</b></td>
            </tr>
          </thead>
          <tbody className='tbody'>
            <tr>
              <td>1</td>
              <td><input type="checkbox"></input> </td>
              <td className='productpic'><img className='productpic' src='/product1.jpg'></img></td>
              <td>Iphone 13 Pro Max</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
            </tr>
            <tr>
              <td>2</td>
              <td><input type="checkbox"></input> </td>
              <td className='productpic'><img className='productpic' src='/product1.jpg'></img></td>
              <td>Iphone 13 Pro Max</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
            </tr>
            <tr>
              <td>3</td>
              <td><input type="checkbox"></input> </td>
              <td className='productpic'><img className='productpic' src='/product1.jpg'></img></td>
              <td>Iphone 13 Pro Max</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
            </tr>
            <tr>
              <td>4</td>
              <td><input type="checkbox"></input> </td>
              <td className='productpic'><img className='productpic' src='/product1.jpg'></img></td>
              <td>Iphone 13 Pro Max</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
            </tr>
            <tr>
              <td>4</td>
              <td><input type="checkbox"></input> </td>
              <td className='productpic'><img className='productpic' src='/product1.jpg'></img></td>
              <td>Iphone 13 Pro Max</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      
  )
}

export default Product