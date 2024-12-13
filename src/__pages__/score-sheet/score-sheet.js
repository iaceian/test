import React, { useState } from 'react'
import Group from '../../__components__/score-sheet/group'
import { Footer } from '../../__components__/footer/footer'

function ScoreSheet() {

  return (
    <div>
      <ol className='breadcrumb float-xl-end'>
        <li className='breadcrumb-item active'>Score sheet</li>
      </ol>
      <h1 className='page-header'>Score sheet</h1>
			<div class="col-xl-4">
				<div class="input-group">
					<button className="btn btn-default me-5px"><i className="fa fa-plus"></i> Add Group</button>
					<input type="email" class="form-control" placeholder="Add Group" />
				</div>
			</div>
      <Footer />
    </div>
  )
}

export default ScoreSheet
