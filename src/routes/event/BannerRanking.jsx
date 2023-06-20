import { Lnb, CurrentBox, CheckBox } from "../../components/bundle_components";
import { useState } from "react";
import banner from "../../assets/img/banner.png";
import arrowRightGreen from "../../assets/img/icon/angle_right_green.svg";
import BannerRankingModal from "./BannerRankingModal";
import plus from "../../assets/img/icon/border_plus.svg";

export default function BannerRanking() {  
  const [modalOpen, setModalOpen] = useState(false);

  return(
    <>
      <Lnb lnbType="event" />
      <CurrentBox mod={true} del={true} down={true} tit="공개 배너 순위 설정"/>
      <div className="banner_ranking box_ty01 table_type">
        <div className="table_wrap line">
          <h4 className="table_tit">메인 상단 <button className="btn_plus" onClick={setModalOpen}><img src={plus} alt=""/></button></h4>
          <table className="table"> 
            <colgroup>
              <col width={"80px"}/>
              <col width={"80px"}/>
              <col width={"500px"}/>
              <col width={"250px"}/>
              <col width={"250px"}/>
              <col width={"100px"}/>
            </colgroup>
            <thead>
              <tr>
                <th className="check"> 
                  <CheckBox for="check" id="check" />
                </th>
                <th>순서</th>
                <th>배너 이미지</th>
                <th>배너 위치</th>
                <th>공개 기한</th>
                <th>순위 설정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>1</td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>메인 상단</td>          
                <td>2023.05.08 – 2023.07.08</td>         
                <td>
                  <button type="button" className="btn_up"><img src={arrowRightGreen} alt="" /></button>  
                  <button type="button" className="btn_down"><img src={arrowRightGreen} alt="" /></button>  
                </td> 
              </tr>
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>2</td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>메인 상단</td>          
                <td>2023.05.08 – 2023.07.08</td>         
                <td>
                  <button type="button" className="btn_up"><img src={arrowRightGreen} alt="" /></button>  
                  <button type="button" className="btn_down"><img src={arrowRightGreen} alt="" /></button>  
                </td> 
              </tr>
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>3</td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>메인 상단</td>          
                <td>2023.05.08 – 2023.07.08</td>         
                <td>
                  <button type="button" className="btn_up"><img src={arrowRightGreen} alt="" /></button>  
                  <button type="button" className="btn_down"><img src={arrowRightGreen} alt="" /></button>  
                </td> 
              </tr>
            </tbody>
          </table>
        </div>       
        <div className="table_wrap line">
          <h4 className="table_tit">메인 중간 <button className="btn_plus"><img src={plus} alt=""/></button></h4>
          <table className="table"> 
            <colgroup>
              <col width={"80px"}/>
              <col width={"80px"}/>
              <col width={"500px"}/>
              <col width={"250px"}/>
              <col width={"250px"}/>
              <col width={"100px"}/>
            </colgroup>
            <thead>
              <tr>
                <th className="check"> 
                  <CheckBox for="check" id="check" />
                </th>
                <th>순서</th>
                <th>배너 이미지</th>
                <th>배너 위치</th>
                <th>공개 기한</th>
                <th>순위 설정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>1</td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>메인 상단</td>          
                <td>2023.05.08 – 2023.07.08</td>         
                <td>
                  <button type="button" className="btn_up"><img src={arrowRightGreen} alt="" /></button>  
                  <button type="button" className="btn_down"><img src={arrowRightGreen} alt="" /></button>  
                </td> 
              </tr>
            </tbody>
          </table>
        </div>       
        <div className="table_wrap line">
          <h4 className="table_tit">카테고리 <button className="btn_plus"><img src={plus} alt=""/></button></h4>
          <table className="table"> 
            <colgroup>
              <col width={"80px"}/>
              <col width={"80px"}/>
              <col width={"500px"}/>
              <col width={"250px"}/>
              <col width={"250px"}/>
              <col width={"100px"}/>
            </colgroup>
            <thead>
              <tr>
                <th className="check"> 
                  <CheckBox for="check" id="check" />
                </th>
                <th>순서</th>
                <th>배너 이미지</th>
                <th>배너 위치</th>
                <th>공개 기한</th>
                <th>순위 설정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>1</td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>메인 상단</td>          
                <td>2023.05.08 – 2023.07.08</td>         
                <td>
                  <button type="button" className="btn_up"><img src={arrowRightGreen} alt="" /></button>  
                  <button type="button" className="btn_down"><img src={arrowRightGreen} alt="" /></button>  
                </td> 
              </tr>
            </tbody>
          </table>
        </div>       
        <div className="table_wrap line">
          <h4 className="table_tit">데일리 발자국 챌린지 리스트 상단 <button className="btn_plus"><img src={plus} alt=""/></button></h4>
          <table className="table"> 
            <colgroup>
              <col width={"80px"}/>
              <col width={"80px"}/>
              <col width={"500px"}/>
              <col width={"250px"}/>
              <col width={"250px"}/>
              <col width={"100px"}/>
            </colgroup>
            <thead>
              <tr>
                <th className="check"> 
                  <CheckBox for="check" id="check" />
                </th>
                <th>순서</th>
                <th>배너 이미지</th>
                <th>배너 위치</th>
                <th>공개 기한</th>
                <th>순위 설정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>1</td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>메인 상단</td>          
                <td>2023.05.08 – 2023.07.08</td>         
                <td>
                  <button type="button" className="btn_up"><img src={arrowRightGreen} alt="" /></button>  
                  <button type="button" className="btn_down"><img src={arrowRightGreen} alt="" /></button>  
                </td> 
              </tr>
            </tbody>
          </table>
        </div>       
        <div className="table_wrap line">
          <h4 className="table_tit">데일리 발자국 챌린지 글쓰기 상단 <button className="btn_plus"><img src={plus} alt=""/></button></h4>
          <table className="table"> 
            <colgroup>
              <col width={"80px"}/>
              <col width={"80px"}/>
              <col width={"500px"}/>
              <col width={"250px"}/>
              <col width={"250px"}/>
              <col width={"100px"}/>
            </colgroup>
            <thead>
              <tr>
                <th className="check"> 
                  <CheckBox for="check" id="check" />
                </th>
                <th>순서</th>
                <th>배너 이미지</th>
                <th>배너 위치</th>
                <th>공개 기한</th>
                <th>순위 설정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>1</td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>메인 상단</td>          
                <td>2023.05.08 – 2023.07.08</td>         
                <td>
                  <button type="button" className="btn_up"><img src={arrowRightGreen} alt="" /></button>  
                  <button type="button" className="btn_down"><img src={arrowRightGreen} alt="" /></button>  
                </td> 
              </tr>
            </tbody>
          </table>
        </div>       
        <div className="table_wrap line">
          <h4 className="table_tit">탄소중립랭킹 중간 <button className="btn_plus"><img src={plus} alt=""/></button></h4>
          <table className="table"> 
            <colgroup>
              <col width={"80px"}/>
              <col width={"80px"}/>
              <col width={"500px"}/>
              <col width={"250px"}/>
              <col width={"250px"}/>
              <col width={"100px"}/>
            </colgroup>
            <thead>
              <tr>
                <th className="check"> 
                  <CheckBox for="check" id="check" />
                </th>
                <th>순서</th>
                <th>배너 이미지</th>
                <th>배너 위치</th>
                <th>공개 기한</th>
                <th>순위 설정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>1</td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>메인 상단</td>          
                <td>2023.05.08 – 2023.07.08</td>         
                <td>
                  <button type="button" className="btn_up"><img src={arrowRightGreen} alt="" /></button>  
                  <button type="button" className="btn_down"><img src={arrowRightGreen} alt="" /></button>  
                </td> 
              </tr>
            </tbody>
          </table>
        </div>       
        <div className="table_wrap line">
          <h4 className="table_tit">탄소중립랭킹 하단 <button className="btn_plus"><img src={plus} alt=""/></button></h4>
          <table className="table"> 
            <colgroup>
              <col width={"80px"}/>
              <col width={"80px"}/>
              <col width={"500px"}/>
              <col width={"250px"}/>
              <col width={"250px"}/>
              <col width={"100px"}/>
            </colgroup>
            <thead>
              <tr>
                <th className="check"> 
                  <CheckBox for="check" id="check" />
                </th>
                <th>순서</th>
                <th>배너 이미지</th>
                <th>배너 위치</th>
                <th>공개 기한</th>
                <th>순위 설정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>1</td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>메인 상단</td>          
                <td>2023.05.08 – 2023.07.08</td>         
                <td>
                  <button type="button" className="btn_up"><img src={arrowRightGreen} alt="" /></button>  
                  <button type="button" className="btn_down"><img src={arrowRightGreen} alt="" /></button>  
                </td> 
              </tr>
            </tbody>
          </table>
        </div>       
        <div className="table_wrap line">
          <h4 className="table_tit">이벤트/뉴스 상단 <button className="btn_plus"><img src={plus} alt=""/></button></h4>
          <table className="table"> 
            <colgroup>
              <col width={"80px"}/>
              <col width={"80px"}/>
              <col width={"500px"}/>
              <col width={"250px"}/>
              <col width={"250px"}/>
              <col width={"100px"}/>
            </colgroup>
            <thead>
              <tr>
                <th className="check"> 
                  <CheckBox for="check" id="check" />
                </th>
                <th>순서</th>
                <th>배너 이미지</th>
                <th>배너 위치</th>
                <th>공개 기한</th>
                <th>순위 설정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>1</td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>메인 상단</td>          
                <td>2023.05.08 – 2023.07.08</td>         
                <td>
                  <button type="button" className="btn_up"><img src={arrowRightGreen} alt="" /></button>  
                  <button type="button" className="btn_down"><img src={arrowRightGreen} alt="" /></button>  
                </td> 
              </tr>
            </tbody>
          </table>
        </div>       
        <div className="table_wrap line">
          <h4 className="table_tit">GL 추천 제품 <button className="btn_plus"><img src={plus} alt=""/></button></h4>
          <table className="table"> 
            <colgroup>
              <col width={"80px"}/>
              <col width={"80px"}/>
              <col width={"500px"}/>
              <col width={"250px"}/>
              <col width={"250px"}/>
              <col width={"100px"}/>
            </colgroup>
            <thead>
              <tr>
                <th className="check"> 
                  <CheckBox for="check" id="check" />
                </th>
                <th>순서</th>
                <th>배너 이미지</th>
                <th>배너 위치</th>
                <th>공개 기한</th>
                <th>순위 설정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>1</td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>메인 상단</td>          
                <td>2023.05.08 – 2023.07.08</td>         
                <td>
                  <button type="button" className="btn_up"><img src={arrowRightGreen} alt="" /></button>  
                  <button type="button" className="btn_down"><img src={arrowRightGreen} alt="" /></button>  
                </td> 
              </tr>
            </tbody>
          </table>
        </div>       
      </div>
      {modalOpen?<><BannerRankingModal modalClose={()=>setModalOpen(false)} /><div className="dim" onClick={() => setModalOpen(false)}></div></> : <></>}
    </>
  )
}