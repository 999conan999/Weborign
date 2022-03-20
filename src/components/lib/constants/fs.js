export function fs_convert_schema_cript(arr){
    let script=''
    arr.forEach(e => {
        script+='<script type="application/ld+json">'+e+'</script>';
    });
    return script;
}
//
export function fs_is_value_null(data){
    if(data==null||data=='null'||data==undefined||data.length==undefined||data.length==0||data=='') return true;
    return false;
}
// 
export function fs_convert_html_video(tab_3){
    let result='<div class="newpost-content-contaienr"><div class="featured-new-container"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="newposts-featimg video-wrapper"><div class="rll-youtube-player" data-src="'+tab_3.url_video_1+'" data-id="'+tab_3.id_video_1+'" data-query=""><div data-id="'+tab_3.id_video_1+'" data-query="" data-src="'+tab_3.url_video_1+'"><img data-src="https://i.ytimg.com/vi/'+tab_3.id_video_1+'/hqdefault.jpg" alt="" width="480" height="360" data-ll-status="loaded" class="entered lazyload"><noscript><img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" class="lazyload" alt="" width="480" height="360"></noscript><button class="play" aria-label="play Youtube video"></button></div></div><noscript><iframe width="100%" height="400" src="https://www.youtube.com/embed/'+tab_3.id_video_1+'" title="'+tab_3.title_video_1+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></noscript> </div><h3 class="h3-newpost-title h3-newpost-title_title">'+tab_3.title_video_1+'</h3></div></div></div></div>';

    result+='<div class="newposts-secondary-list"><div class="w-dyn-list"><div role="list" class="w-dyn-items">';

    result+='<div role="listitem" class="w-dyn-item gnws-video_playlist-id active" data-id="'+tab_3.id_video_1+'"><div class="secondary-newpost-cont"><a href="javascript:void(0)" class="position-relative" data-wpel-link="internal"><i class="far fa-play-circle"></i><img width="250" height="180" data-src="https://i.ytimg.com/vi/'+tab_3.id_video_1+'/hqdefault.jpg" class="attachment-size250 size-size250 wp-post-image entered lazyload" alt="'+tab_3.title_video_1+'" data-ll-status="loaded"><noscript><img width="250" height="180" src="https://i.ytimg.com/vi/'+tab_3.id_video_1+'/hqdefault.jpg" class="attachment-size250 size-size250 wp-post-image" alt="'+tab_3.title_video_1+'" ></noscript></a><div class="div-block-39"> <a href="javascript:void(0)" class="w-inline-block" data-wpel-link="internal"> <h4 class="h4-newpost-titles gnws-video_playlist-title">'+tab_3.title_video_1+'</h4> </a> </div></div></div>';
    if(tab_3.url_video_2!=''){
        result+='<div role="listitem" class="w-dyn-item gnws-video_playlist-id" data-id="'+tab_3.id_video_2+'"><div class="secondary-newpost-cont"><a href="javascript:void(0)" class="position-relative" data-wpel-link="internal"><i class="far fa-play-circle"></i><img width="250" height="180" data-src="https://i.ytimg.com/vi/'+tab_3.id_video_2+'/hqdefault.jpg" class="attachment-size250 size-size250 wp-post-image entered lazyload" alt="'+tab_3.title_video_2+'" data-ll-status="loaded"><noscript><img width="250" height="180" src="https://i.ytimg.com/vi/'+tab_3.id_video_2+'/hqdefault.jpg" class="attachment-size250 size-size250 wp-post-image" alt="'+tab_3.title_video_2+'" ></noscript></a><div class="div-block-39"> <a href="javascript:void(0)" class="w-inline-block" data-wpel-link="internal"> <h4 class="h4-newpost-titles gnws-video_playlist-title">'+tab_3.title_video_2+'</h4> </a> </div></div></div>';
    }
    if(tab_3.url_video_3!=''){
        result+='<div role="listitem" class="w-dyn-item gnws-video_playlist-id" data-id="'+tab_3.id_video_3+'"><div class="secondary-newpost-cont"><a href="javascript:void(0)" class="position-relative" data-wpel-link="internal"><i class="far fa-play-circle"></i><img width="250" height="180" data-src="https://i.ytimg.com/vi/'+tab_3.id_video_3+'/hqdefault.jpg" class="attachment-size250 size-size250 wp-post-image entered lazyload" alt="'+tab_3.title_video_3+'" data-ll-status="loaded"><noscript><img width="250" height="180" src="https://i.ytimg.com/vi/'+tab_3.id_video_3+'/hqdefault.jpg" class="attachment-size250 size-size250 wp-post-image" alt="'+tab_3.title_video_3+'" ></noscript></a><div class="div-block-39"> <a href="javascript:void(0)" class="w-inline-block" data-wpel-link="internal"> <h4 class="h4-newpost-titles gnws-video_playlist-title">'+tab_3.title_video_3+'</h4> </a> </div></div></div>';
    }
    if(tab_3.url_video_4!=''){
        result+='<div role="listitem" class="w-dyn-item gnws-video_playlist-id" data-id="'+tab_3.id_video_4+'"><div class="secondary-newpost-cont"><a href="javascript:void(0)" class="position-relative" data-wpel-link="internal"><i class="far fa-play-circle"></i><img width="250" height="180" data-src="https://i.ytimg.com/vi/'+tab_3.id_video_4+'/hqdefault.jpg" class="attachment-size250 size-size250 wp-post-image entered lazyload" alt="'+tab_3.title_video_4+'" data-ll-status="loaded"><noscript><img width="250" height="180" src="https://i.ytimg.com/vi/'+tab_3.id_video_4+'/hqdefault.jpg" class="attachment-size250 size-size250 wp-post-image" alt="'+tab_3.title_video_4+'" ></noscript></a><div class="div-block-39"> <a href="javascript:void(0)" class="w-inline-block" data-wpel-link="internal"> <h4 class="h4-newpost-titles gnws-video_playlist-title">'+tab_3.title_video_4+'</h4> </a> </div></div></div>';
    }

    result+='</div></div></div></div>';
    result+='</div></div>';
    return result;
}
//
export function fs_return_arr_post_save(tab_3,tab_5,list_arr){
    let result=[]; let lock='';
    list_arr.forEach(e => {
        if(e.value==tab_3.post_id_1_tab_2&&lock.search(tab_3.post_id_1_tab_2)==-1){
            lock+=','+e.value;
            result.push(e);
        };
        if(e.value==tab_3.post_id_2_tab_2&&lock.search(tab_3.post_id_2_tab_2)==-1){
            lock+=','+e.value;
            result.push(e);
        };
        if(e.value==tab_3.post_id_3_tab_2&&lock.search(tab_3.post_id_3_tab_2)==-1){
            lock+=','+e.value;
            result.push(e);
        };
        if(e.value==tab_3.post_id_4_tab_2&&lock.search(tab_3.post_id_4_tab_2)==-1){
            lock+=','+e.value;
            result.push(e);
        };
        if(e.value==tab_3.post_id_5_tab_2&&lock.search(tab_3.post_id_5_tab_2)==-1){
            lock+=','+e.value;
            result.push(e);
        };
        if(e.value==tab_5.post_1&&lock.search(tab_5.post_1)==-1){
            lock+=','+e.value;
            result.push(e);
        };
        if(e.value==tab_5.post_2&&lock.search(tab_5.post_2)==-1){
            lock+=','+e.value;
            result.push(e);
        };
        if(e.value==tab_5.post_3&&lock.search(tab_5.post_3)==-1){
            lock+=','+e.value;
            result.push(e);
        };
    });
    return result;    
}