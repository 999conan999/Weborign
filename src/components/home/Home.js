import React, { Component } from 'react';
// import FileMedia from '../lib/fileMedia';
import * as lang from '../lib/constants/language';
import { toast } from 'react-toastify';
import { Button,Segment,Input,Dropdown,Radio, Form, TextArea,} from 'semantic-ui-react';
import {fs_convert_html_video} from '../lib/constants/fs'
import {
    get_posts_by_search,
    get_cate_tag
} from '../lib/constants/axios'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            categorys_list:[],
            data_return_query_search:[],
            key_lock_query_search:'',
            data:{
                tab_1:{
                    title_home:'',
                    descript_home:'',
                    menu_href_1:'',
                    menu_title_1:'',
                    menu_href_2:'',
                    menu_title_2:'',
                    menu_href_3:'',
                    menu_title_3:'',
                    menu_href_4:'',
                    menu_title_4:'',
                    menu_href_5:'',
                    menu_title_5:'',
                    menu_href_6:'',
                    menu_title_6:''
                },
                tab_2:{
                    is_show:true,
                    title_tab_2:'',
                    cate_id_tab_2:'',
                    post_id_1_tab_2:'',
                    post_id_2_tab_2:'',
                    post_id_3_tab_2:'',
                    post_id_4_tab_2:'',
                    post_id_5_tab_2:'',
                },
                tab_3:{
                    is_show:true,
                    title_tab_3:'',
                    url_kenh:'',
                    title_video_1:'',
                    url_video_1:'',
                    title_video_2:'',
                    url_video_2:'',
                    title_video_3:'',
                    url_video_3:'',
                    title_video_4:'',
                    url_video_4:'',
                },
                tab_4:[],
                tab_5:{
                    is_show:true,
                    cate_1:'',
                    post_1:'',
                    cate_2:'',
                    post_2:'',
                    cate_3:'',
                    post_3:'',
                }
            }
        }
    }
    // return img
 async componentDidMount(){
    let data=await get_cate_tag();
    if(data!=null){
        this.setState({
         categorys_list: data.categorys_list
        })
    }
 }
 //
 search_title=(e,data)=>{
    this.query_search(data.searchQuery);
 }   
 //
 query_search=(text)=>{
     if(text!=''){
        clearTimeout(this.time_seach);
        this.time_seach=setTimeout(async()=>{
            let {data_return_query_search,key_lock_query_search}=this.state;
            let data_server=await get_posts_by_search(0,text);
            let z=[]
            data_server.forEach(e => {
                if(key_lock_query_search.search(e.id)==-1){
                    key_lock_query_search+=','+e.id;
                    z.push({
                            key:e.id,
                            value:e.id,
                            text:e.title
                        })
                }
            });
            this.setState({
                data_return_query_search:[...data_return_query_search,...z],
                key_lock_query_search:key_lock_query_search
            })
        },350)
    }
 }
 //
 click_action_update=()=>{
    let {data} =this.state;
    let video_html= fs_convert_html_video(data.tab_3);
    data.tab_3.video_html=video_html;
    console.log("🚀 ~ file: Home.js ~ line 113 ~ Home ~ data", data)
   
 }
    render() {
        let {data_return_query_search,data,categorys_list} =this.state;
        // console.log("🚀 ~ file: Home.js ~ line 70 ~", data)
        return (
            <React.Fragment>
                {/* tab_1 */}
                <Segment raised className='okok'>
                    <div className='wrap-bb' >
                        <span className='oii'>Tiêu đề trang chủ :</span>
                        <div className='inputF'>
                            <Input 
                                size='small' 
                                fluid 
                                value={data.tab_1.title_home}
                                onChange={(e,{value})=>{
                                    let {data}=this.state;
                                    data.tab_1.title_home=value;
                                    this.setState({data:data})
                                }}
                            />
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Mô tả trang chủ : </span>
                        <div className='inputF' style={{borderRadius:"5px",border:"1px solid"}}>
                            <Form>
                                <TextArea 
                                    rows={4}
                                    value={data.tab_1.descript_home}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_1.descript_home=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </Form>
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Menu 1 :</span>
                        <div className='inputK'>
                            <div className='jhg'>
                                <span>Href to:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_1.menu_href_1}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_1.menu_href_1=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </div>
                            <div className='jhv'>
                                <span>Tên:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_1.menu_title_1}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_1.menu_title_1=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Menu 2 :</span>
                        <div className='inputK'>
                            <div className='jhg'>
                                <span>Href to:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_1.menu_href_2}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_1.menu_href_2=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </div>
                            <div className='jhv'>
                                <span>Tên:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_1.menu_title_2}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_1.menu_title_2=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Menu 3 :</span>
                        <div className='inputK'>
                            <div className='jhg'>
                                <span>Href to:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_1.menu_href_3}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_1.menu_href_3=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </div>
                            <div className='jhv'>
                                <span>Tên:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_1.menu_title_3}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_1.menu_title_3=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Menu 4 :</span>
                        <div className='inputK'>
                            <div className='jhg'>
                                <span>Href to:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_1.menu_href_4}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_1.menu_href_4=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </div>
                            <div className='jhv'>
                                <span>Tên:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_1.menu_title_4}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_1.menu_title_4=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Menu 5 :</span>
                        <div className='inputK'>
                            <div className='jhg'>
                                <span>Href to:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_1.menu_href_5}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_1.menu_href_5=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </div>
                            <div className='jhv'>
                                <span>Tên:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_1.menu_title_5}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_1.menu_title_5=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Menu 6 :</span>
                        <div className='inputK'>
                            <div className='jhg'>
                                <span>Href to:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_1.menu_href_6}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_1.menu_href_6=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </div>
                            <div className='jhv'>
                                <span>Tên:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_1.menu_title_6}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_1.menu_title_6=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </Segment>
                {/* tab_2 */}
                <Segment raised className='okok'>
                    {/*  */}
                    <div className='wrap-bb' >
                        <span className='oii'>Hiển thị/Ẩn :</span>
                        <div className='inputF'>
                            <Radio 
                                toggle 
                                checked={data.tab_2.is_show}
                                onClick={()=>{
                                    let {data}=this.state;
                                    data.tab_2.is_show=!data.tab_2.is_show;
                                    this.setState({data:data})
                                }}
                            />
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Tiêu đề hướng dẫn :</span>
                        <div className='inputF'>
                            <Input 
                                size='small' 
                                fluid 
                                value={data.tab_2.title_tab_2}
                                onChange={(e,{value})=>{
                                    let {data}=this.state;
                                    data.tab_2.title_tab_2=value;
                                    this.setState({data:data})
                                }}
                            />
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Chọn danh mục :</span>
                        <div className='inputF'>
                            <Dropdown
                                placeholder='Lựa chọn bài viết'
                                fluid
                                search
                                selection
                                options={categorys_list}
                                value={data.tab_2.cate_id_tab_2}
                                onChange={(e,{value})=>{
                                    let {data}=this.state;
                                    data.tab_2.cate_id_tab_2=value;
                                    this.setState({data:data})                                    
                                }}
                            />
                            <span className='pop'
                                onClick={()=>{
                                    let {data}=this.state;
                                    data.tab_2.cate_id_tab_2='';
                                    this.setState({data:data})
                                }}
                            >clear</span>
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Lựa chọn bài viết :</span>
                        <div className='inputK'>
                            <div className='jhgz'>
                                <span>Bài viết 1<span style={{color:"red"}}> *</span>:</span><br/>
                                <Dropdown
                                    placeholder='Lựa chọn bài viết'
                                    fluid
                                    search
                                    selection
                                    options={data_return_query_search}
                                    onSearchChange={this.search_title}
                                    value={data.tab_2.post_id_1_tab_2}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_2.post_id_1_tab_2=value;
                                        this.setState({data:data})
                                    }}
                                />
                                <span className='popz'
                                    onClick={()=>{
                                        let {data}=this.state;
                                        data.tab_2.post_id_1_tab_2='';
                                        this.setState({data:data})
                                    }}
                                >clear</span>
                            </div>
                            <div className='jhgz'>
                                <span>Bài viết 2:</span><br/>
                                <Dropdown
                                    placeholder='Lựa chọn bài viết'
                                    fluid
                                    search
                                    selection
                                    options={data_return_query_search}
                                    onSearchChange={this.search_title}
                                    value={data.tab_2.post_id_2_tab_2}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_2.post_id_2_tab_2=value;
                                        this.setState({data:data})
                                    }}
                                />
                                <span className='popz'
                                    onClick={()=>{
                                        let {data}=this.state;
                                        data.tab_2.post_id_2_tab_2='';
                                        this.setState({data:data})
                                    }}
                                >clear</span>
                            </div>
                            <div className='jhgz'>
                                <span>Bài viết 3:</span><br/>
                                <Dropdown
                                    placeholder='Lựa chọn bài viết'
                                    fluid
                                    search
                                    selection
                                    options={data_return_query_search}
                                    onSearchChange={this.search_title}
                                    value={data.tab_2.post_id_3_tab_2}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_2.post_id_3_tab_2=value;
                                        this.setState({data:data})
                                    }}
                                />
                                <span className='popz'
                                    onClick={()=>{
                                        let {data}=this.state;
                                        data.tab_2.post_id_3_tab_2='';
                                        this.setState({data:data})
                                    }}
                                >clear</span>
                            </div>
                            <div className='jhgz'>
                                <span>Bài viết 4:</span><br/>
                                <Dropdown
                                    placeholder='Lựa chọn bài viết'
                                    fluid
                                    search
                                    selection
                                    options={data_return_query_search} 
                                    onSearchChange={this.search_title}
                                    value={data.tab_2.post_id_4_tab_2}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_2.post_id_4_tab_2=value;
                                        this.setState({data:data})
                                    }}
                                />
                                <span className='popz'
                                    onClick={()=>{
                                        let {data}=this.state;
                                        data.tab_2.post_id_4_tab_2='';
                                        this.setState({data:data})
                                    }}
                                >clear</span>
                            </div>
                            <div className='jhgz'>
                                <span>Bài viết 5:</span><br/>
                                <Dropdown
                                    placeholder='Lựa chọn bài viết'
                                    fluid
                                    search
                                    selection
                                    options={data_return_query_search} 
                                    onSearchChange={this.search_title}
                                    value={data.tab_2.post_id_5_tab_2}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_2.post_id_5_tab_2=value;
                                        this.setState({data:data})
                                    }}
                                />
                                <span className='popz'
                                    onClick={()=>{
                                        let {data}=this.state;
                                        data.tab_2.post_id_5_tab_2='';
                                        this.setState({data:data})
                                    }}
                                >clear</span>
                            </div>
                        </div>
                    </div>
                </Segment>
                {/* tab_3 */}
                <Segment raised className='okok'>
                    <div className='wrap-bb' >
                        <span className='oii'>Hiển thị/Ẩn :</span>
                        <div className='inputF'>
                            <Radio toggle  
                                checked={data.tab_3.is_show}
                                onClick={()=>{
                                    let {data}=this.state;
                                    data.tab_3.is_show=!data.tab_3.is_show;
                                    this.setState({data:data})
                                }}
                            />
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Tiêu đề mục video :</span>
                        <div className='inputF'>
                            <Input 
                                size='small' 
                                fluid 
                                value={data.tab_3.title_tab_3}
                                onChange={(e,{value})=>{
                                    let {data}=this.state;
                                    data.tab_3.title_tab_3=value;
                                    this.setState({data:data})
                                }}
                            />
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Url kênh youtube:</span>
                        <div className='inputF'>
                            <Input 
                                size='small' 
                                fluid 
                                value={data.tab_3.url_kenh}
                                onChange={(e,{value})=>{
                                    let {data}=this.state;
                                    data.tab_3.url_kenh=value;
                                    this.setState({data:data})
                                }}
                            />
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Video 1 <span style={{color:"red"}}> *</span>:</span>
                        <div className='inputK'>
                            <div className='jhg'>
                                <span>Url:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_3.url_video_1}
                                    onChange={(e,{value})=>{
                                        if(value.search('embed/')!=-1){
                                            let z=value.split('embed/');
                                            let {data}=this.state;
                                            data.tab_3.url_video_1=value;
                                            data.tab_3.id_video_1=z[1];
                                            this.setState({data:data})
                                        }else{
                                            toast.info('Url youtube phải có kiểu (nên dùng copy - paste) https://www.youtube.com/embed/[id]',{theme: "colored"})
                                            let {data}=this.state;
                                            data.tab_3.url_video_1='';
                                            this.setState({data:data})
                                        }
                                    }}
                                />
                            </div>
                            <div className='jhv'>
                                <span>Title:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_3.title_video_1}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_3.title_video_1=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Video 2 :</span>
                        <div className='inputK'>
                            <div className='jhg'>
                                <span>Url:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_3.url_video_2}
                                    onChange={(e,{value})=>{
                                        if(value.search('embed/')!=-1){
                                            let z=value.split('embed/');
                                            let {data}=this.state;
                                            data.tab_3.url_video_2=value;
                                            data.tab_3.id_video_2=z[1];
                                            this.setState({data:data})
                                        }else{
                                            toast.info('Url youtube phải có kiểu (nên dùng copy - paste) https://www.youtube.com/embed/[id]',{theme: "colored"})
                                            let {data}=this.state;
                                            data.tab_3.url_video_2='';
                                            this.setState({data:data})
                                        }
                                    }}
                                />
                            </div>
                            <div className='jhv'>
                                <span>Title:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_3.title_video_2}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_3.title_video_2=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Video 3 :</span>
                        <div className='inputK'>
                            <div className='jhg'>
                                <span>Url:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_3.url_video_3}
                                    onChange={(e,{value})=>{
                                        if(value.search('embed/')!=-1){
                                            let z=value.split('embed/');
                                            let {data}=this.state;
                                            data.tab_3.url_video_3=value;
                                            data.tab_3.id_video_3=z[1];
                                            this.setState({data:data})
                                        }else{
                                            toast.info('Url youtube phải có kiểu (nên dùng copy - paste) https://www.youtube.com/embed/[id]',{theme: "colored"})
                                            let {data}=this.state;
                                            data.tab_3.url_video_3='';
                                            this.setState({data:data})
                                        }
                                    }}
                                />
                            </div>
                            <div className='jhv'>
                                <span>title:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_3.title_video_3}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_3.title_video_3=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Video 4 :</span>
                        <div className='inputK'>
                            <div className='jhg'>
                                <span>Url:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_3.url_video_4}
                                    onChange={(e,{value})=>{
                                        if(value.search('embed/')!=-1){
                                            let z=value.split('embed/');
                                            let {data}=this.state;
                                            data.tab_3.url_video_4=value;
                                            data.tab_3.id_video_4=z[1];
                                            this.setState({data:data})
                                        }else{
                                            toast.info('Url youtube phải có kiểu (nên dùng copy - paste) https://www.youtube.com/embed/[id]',{theme: "colored"})
                                            let {data}=this.state;
                                            data.tab_3.url_video_4='';
                                            this.setState({data:data})
                                        }
                                    }}
                                />
                            </div>
                            <div className='jhv'>
                                <span>Title:</span><br/>
                                <Input 
                                    size='small' 
                                    fluid 
                                    value={data.tab_3.title_video_4}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_3.title_video_4=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                </Segment>
                {/*  */}
                <Segment raised className='okok'>
                    <div className='wrap-bb' >
                        <span className='oii'>Lựa chọn danh mục hiển thị :</span>
                        <div className='inputF'>
                        <Dropdown
                            placeholder='Chọn danh mục'
                            fluid
                            multiple
                            search
                            selection
                            options={categorys_list}
                                value={data.tab_4}
                                onChange={(e,{value})=>{
                                    let {data}=this.state;
                                    data.tab_4=value;
                                    this.setState({data:data})                                    
                                }}
                        />
                        </div>
                    </div>
                </Segment>
                {/*  */}
                <Segment raised className='okok'>
                    <div className='wrap-bb' >
                        <span className='oii'>Hiển thị/Ẩn :</span>
                        <div className='inputF'>
                            <Radio toggle 
                                checked={data.tab_5.is_show}
                                onClick={()=>{
                                    let {data}=this.state;
                                    data.tab_5.is_show=!data.tab_5.is_show;
                                    this.setState({data:data})
                                }}
                            />
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Chọn danh mục 1 :</span>
                        <div className='inputK'>
                            <div className='jhv'>
                                <span>Danh mục :</span><br/>
                                <Dropdown
                                    placeholder='Chọn danh mục'
                                    fluid
                                    search
                                    selection
                                    options={categorys_list}
                                    value={data.tab_5.cate_1}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_5.cate_1=value;
                                        this.setState({data:data})                                    
                                    }}
                                />
                                <span className='popz'
                                    onClick={()=>{
                                        let {data}=this.state;
                                        data.tab_5.cate_1='';
                                        this.setState({data:data}) 
                                    }}
                                >clear</span>
                            </div>
                            <div className='jhv'>
                                <span>Bài viết cố định:</span><br/>
                                <Dropdown
                                    placeholder='Lựa chọn bài viết'
                                    fluid
                                    search
                                    selection
                                    options={data_return_query_search} 
                                    onSearchChange={this.search_title}
                                    value={data.tab_5.post_1}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_5.post_1=value;
                                        this.setState({data:data})
                                    }}
                                />
                                <span className='popz'
                                    onClick={()=>{
                                        let {data}=this.state;
                                        data.tab_5.post_1='';
                                        this.setState({data:data})
                                    }}
                                >clear</span>
                            </div>
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Chọn danh mục 2 :</span>
                        <div className='inputK'>
                            <div className='jhv'>
                                <span>Danh mục :</span><br/>
                                <Dropdown
                                    placeholder='Chọn danh mục'
                                    fluid 
                                    search
                                    selection
                                    options={categorys_list}
                                    value={data.tab_5.cate_2}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_5.cate_2=value;
                                        this.setState({data:data})                                    
                                    }}
                                />
                                <span className='popz'
                                    onClick={()=>{
                                        let {data}=this.state;
                                        data.tab_5.cate_2='';
                                        this.setState({data:data}) 
                                    }}
                                >clear</span>
                            </div>
                            <div className='jhv'>
                                <span>Bài viết cố định:</span><br/>
                                <Dropdown
                                    placeholder='Lựa chọn bài viết'
                                    fluid
                                    search
                                    selection
                                    options={data_return_query_search} 
                                    onSearchChange={this.search_title}
                                    value={data.tab_5.post_2}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_5.post_2=value;
                                        this.setState({data:data})
                                    }}
                                />
                                <span className='popz'
                                    onClick={()=>{
                                        let {data}=this.state;
                                        data.tab_5.post_2='';
                                        this.setState({data:data}) 
                                    }}
                                >clear</span>
                            </div>
                        </div>
                    </div>
                    <div className='wrap-bb' >
                        <span className='oii'>Chọn danh mục 3 :</span>
                        <div className='inputK'>
                            <div className='jhv'>
                                <span>Danh mục :</span><br/>
                                <Dropdown
                                    placeholder='Chọn danh mục'
                                    fluid 
                                    search
                                    selection
                                    options={categorys_list}
                                    value={data.tab_5.cate_3}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_5.cate_3=value;
                                        this.setState({data:data})                                    
                                    }}
                                />
                                <span className='popz'
                                    onClick={()=>{
                                        let {data}=this.state;
                                        data.tab_5.cate_3='';
                                        this.setState({data:data}) 
                                    }}
                                >clear</span>
                            </div>
                            <div className='jhv'>
                                <span>Bài viết cố định:</span><br/>
                                <Dropdown
                                    placeholder='Lựa chọn bài viết'
                                    fluid
                                    search
                                    selection
                                    options={data_return_query_search} 
                                    onSearchChange={this.search_title}
                                    value={data.tab_5.post_3}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.tab_5.post_3=value;
                                        this.setState({data:data})
                                    }}
                                />
                                <span className='popz'
                                    onClick={()=>{
                                        let {data}=this.state;
                                        data.tab_5.post_3='';
                                        this.setState({data:data})
                                    }}
                                >clear</span>
                            </div>
                        </div>
                    </div>
                </Segment>
                <Segment raised className='okok nhnh'>
                    <Button positive onClick={this.click_action_update} style={{float:'right',marginRight:'50%'}}>{lang.UPDATE}</Button>
                </Segment>
            </React.Fragment>
        )
    }
    //

}
export default Home;