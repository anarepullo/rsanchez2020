function Movie_OnStart(){
StackTrace="Al Iniciar";
SoundPlay ("musica", true);
VideoSetVolume("video",0);

}

function Frame__0_0(ID){
StackTrace="Escena 1 Fotograma 0";
Pause();


}

function Frame__1_0(ID){
StackTrace="Escena 2 Fotograma 0";
Pause();


}

function BOTONIRSONIDO_OnClick(){
StackTrace="BOTON IR SONIDO.Al Hacer Clic";
GotoSceneName("AUDIO");
SoundPlay("click",false);
}

function SONIDODELVIDEO_OnClick(){
StackTrace="SONIDO DEL VIDEO.Al Hacer Clic";
VideoSetVolume("video",100);
SoundPlay("click",false);
}

function SONIDODELVIDEO_OnRelease(){
StackTrace="SONIDO DEL VIDEO.Al Liberar";
VideoSetVolume("video",0);
SoundPlay("click",false);
}

function PAUSARVIDEO_OnClick(){
StackTrace="PAUSAR VIDEO.Al Hacer Clic";
VideoPause("video");
SoundPlay("click",false);

}

function PAUSARVIDEO_OnRelease(){
StackTrace="PAUSAR VIDEO.Al Liberar";
VideoResume("video");
SoundPlay("click",false);
}

function HotSpot1_OnClick(){
StackTrace="HotSpot1.Al Hacer Clic";
VideoPause("video");

}

function BOTONIRVIDEO_OnClick(){
StackTrace="BOTON IR VIDEO.Al Hacer Clic";
GotoSceneName("VIDEO");
SoundPlay("click",false);
}

function MUSICAREPRODUCIENDO_OnClick(){
StackTrace="MUSICA REPRODUCIENDO.Al Hacer Clic";
SoundPause("musica");
SoundPlay("click",false);
}

function MUSICAREPRODUCIENDO_OnRelease(){
StackTrace="MUSICA REPRODUCIENDO.Al Liberar";
SoundResume("musica");
SoundPlay("click",false);
}

