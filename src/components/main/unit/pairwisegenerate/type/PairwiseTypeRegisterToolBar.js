/**
 * 작성자 남예진
 * 설명: 서비스 실행 이력 컴포넌트 상단의 성공/실패 갯수, 테스트 시작, 내보내기, 삭제 버튼들, 그리고 상단 페이징 처리 기능
**/
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import styles from './PairwiseTypeRegisterToolBar.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class PairwiseTypeRegisterToolBar extends Component {

  closeChild = () => {
    this.setState({
      showChild: false
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      showChild: true
    }
  }

  render() {
    return (
      <div className ={cx('pairwise-type-register-tool-bar')}>
      <div className={cx('tool-bar')}>
        <div className={cx('bottom-tool-bar')}>
          <div className="top-pagenation">
            <div className={cx('count-of-list')}>
              <select name="countOfList" value={(this.props.pageCnt)} onChange={this.props.localOnChangeSelectValue}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="500">500</option>
              </select>
            </div>
            <div className={cx('display-range')}>
              <span>전체 {this.props.totalCnt}개 {this.props.from} - {this.props.to} 보임</span>
            </div>
          </div>
          <div className={cx('toolbar-group')}>
            <div className={cx('button-group')}>
              <Button className={cx('batchDelete-button')} onClick={(e) => this.props.remoteBatchDelete(e)} >
                <i className={cx("fa fa-minus")} />
                <span className={cx('batchDelete-font')}>삭제</span>
              </Button>
            </div>
            <div className = {cx('button-group')}>
              <Button className = {cx('add-button')} onClick = {(e) => this.props.localAddRow(e)}>
                <i className = {cx("fa fa-plus")}/>
                <span className = {cx('add-font')}>추가</span>
                </Button>
            </div>
            
            <div className={cx('button-group')}>
              <Button className={cx('save-button')} onClick={(e) => this.props.remoteBatchSave(e)}>
                <i className={cx("fa fa-save")} />
                <span className={cx('save-font')}>저장</span>
              </Button>
            </div>
            
          </div>

        </div>
      </div>
    </div>
    )
  }
}
export default PairwiseTypeRegisterToolBar;
