'use strict';

//js
import * as $ from "jquery"
// import "bootstrap-sass/assets/javascripts/bootstrap.min.js";

//css
require ('../css/style.scss');

window.onload = function() {
	var projects = require('./projects.js').projects;
	projects = projects.reverse();

	for(var i = projects.length - 1; i >= 0; i--) {
		var $newProject = $('<div/>', {'class':"project-item row is-flex"});
		var $textPart = $('<div/>', {'class':'col-xs-12 col-md-6 project-item-text'})
		var $textWrapper = $('<div/>', {'class':'project-item-text-wrapper'})
		var $imgPart = $('<div/>', {'class':'col-xs-12 col-md-6 project-item-img'})
		if(projects[i]['live_url']){
			$textWrapper.append('<a href="'+ projects[i]['live_url'] +'"><p class="strong project-name h3">' + projects[i]['name'] + '</p></a>');
		}
		if(projects[i]['github_url']){
			$textWrapper.append('   <a href=' + projects[i]['github_url'] + '><i class="fa fa-github fa-2x"> </i></a>');
		}
		if(projects[i]['description']){
			$textWrapper.append('<p>' + projects[i]['description']+ '</p>');
		}
		if(projects[i]['img_url']){
			// $textPart.append('<p>' + projects[i]['description']+ '</p>');
			var $imglink = $('<a href="'+ projects[i]['live_url'] +'"></a>')
			var $img = $('<img class="project-img img-responsive">');
			$img.attr('src', projects[i]['img_url']);
			$imglink.append($img)
			$imgPart.append($imglink)
		}
		// if([projects[i]['img_url']]){
		// }
		$textPart.append($textWrapper);
		if( !(i % 2)){
			$newProject.append($textPart).append($imgPart);
		} else {
			$newProject.append($imgPart).append($textPart);

		}

		// $newProject.text(projects[i]['name']);
		$('.project-list').append($newProject);
	}

}
