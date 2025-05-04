function FUNCTION_generate_script(){
    const container = document.getElementById("script_container");
    container.innerHTML = "";
    script = document.createElement("p");
    script.className = "P_script_container";
    script.textContent = "enable";

    script.textContent += FUNCTION_hostname_script();
    script.textContent += FUNCTION_message_script();
    script.textContent += FUNCTION_eigrp_script();
    script.textContent += FUNCTION_ospf_script();
    script.textContent += FUNCTION_dhcp_script();
    script.textContent += FUNCTION_iphelper_script();
    script.textContent += FUNCTION_sshv2_script();


    script.textContent += FUNCTION_password_console_script();
    script.textContent += FUNCTION_password_vty_script();
    script.textContent += FUNCTION_password_privileged_script();
    container.appendChild(script);
}



function FUNCTION_wildcard(string){
    var list  = string.split(".");
    list = list.map(element => 255 - parseInt(element));
    return list.join(".");
}

function FUNCTION_hostname_script(){
    if (document.getElementById("hostname").value != ""){
    return "\nconfigure terminal\nhostname "+(document.getElementById("hostname").value)+"\nexit";
    } else {
        return "";
    }
}


function FUNCTION_password_console_script(container){
    //console_password
    if (document.getElementById("password_console").value != ""){
        return "\nconfigure terminal\nline console 0\npassword "+(document.getElementById("password_console").value)+"\nlogin\nexit\nexit";
    } else {
        return "";
    }
}


function FUNCTION_password_privileged_script(){
    //password_privileged
    if (document.getElementById("password_privileged").value != ""){
        return "\nconfigure terminal\nenable secret "+(document.getElementById("password_privileged").value)+"\nexit";
    } else {
        return "";
    }
}

function FUNCTION_password_vty_script(){
    //password_privileged
    if (document.getElementById("password_vty").value != ""){
        return "\nconfigure terminal\nline vty 0 4\npassword "+(document.getElementById("password_vty").value)+"\nlogin\nexit\nexit";
    } else {
        return "";
    }
}

function FUNCTION_message_script(){
    if (document.getElementById("message").value != ""){
    return "\nconfigure terminal\nbanner motd #"+(document.getElementById("message").value)+"#\nexit";
    } else {
        return "";
    }
}

function FUNCTION_eigrp_script(){
    //eigrp_mask_1 //eigrp_network_1
    if (document.getElementById("eigrp_count").value != ""){
        const eigrp_count = parseInt(document.getElementById("eigrp_count").value);
        var a = "\nconfigure terminal\nrouter eigrp 1";
        for (let i=1 ; i < (eigrp_count+1) ; i++){
            const eigrp_network = document.getElementById("eigrp_network_"+i).value;
            const eigrp_mask = document.getElementById("eigrp_mask_"+i).value;
            a += "\nnetwork "+eigrp_network+" "+FUNCTION_wildcard(eigrp_mask); //network 192.168.145.0 0.0.0.255
        }
        a += "\nexit\nexit";
        return a;
    } else {
        return "";
    }
}

function FUNCTION_ospf_script(){
    if (document.getElementById("ospf_count").value != ""){
        const ospf_count = parseInt(document.getElementById("ospf_count").value);
        var a = "\nconfigure terminal\nrouter ospf 1";
        for (let i=1 ; i < (ospf_count+1) ; i++){
            const ospf_network = document.getElementById("ospf_network_"+i).value;
            const ospf_mask = document.getElementById("ospf_mask_"+i).value;
            a += "\nnetwork "+ospf_network+" "+FUNCTION_wildcard(ospf_mask)+" area 0"; //network 192.168.145.0 0.0.0.255
        }
        a += "\nexit\nexit";
        return a;
    } else {
        return "";
    }
}

function FUNCTION_dhcp_script(){
    if (document.getElementById("dhcp_count").value != ""){
        const dhcp_count = parseInt(document.getElementById("dhcp_count").value);
        var a = "\nconfigure terminal";
        for (let i=1 ; i < (dhcp_count+1) ; i++){
            const dhcp_name = document.getElementById("dhcp_poolname_"+i).value;
            const dhcp_network = document.getElementById("dhcp_network_"+i).value;
            const dhcp_mask = document.getElementById("dhcp_mask_"+i).value;
            const dhcp_def_router = document.getElementById("dhcp_def_router_"+i).value;
            a += "\nip dhcp pool "+dhcp_name+"\nnetwork "+dhcp_network+" "+dhcp_mask+"\ndefault-router "+dhcp_def_router+"\nexit";
        }
        a += "\nexit"
        return a;
    } else {
        return "";
    }
}


function FUNCTION_iphelper_script(){
    if (document.getElementById("iphelper_count").value != ""){
        const iphelper_count = parseInt(document.getElementById("iphelper_count").value);
        var a = "\nconfigure terminal";
        for (let i=1 ; i < (iphelper_count+1) ; i++){
            const iphelper_interface = document.getElementById("iphelper_interface_"+i).value;
            const iphelper_adress = document.getElementById("iphelper_address_"+i).value;
            a += "\ninterface "+iphelper_interface+"\nip helper-address "+iphelper_adress+"\nexit";
        }
        a += "\nexit";
        return a;
    } else {
        return "";
    }
}


function FUNCTION_sshv2_script(){
    if (document.getElementById("sshv2_domain").value != ""){
        const sshv2_domain = document.getElementById("sshv2_domain").value;
        const sshv2_username = document.getElementById("sshv2_username").value;
        const sshv2_password = document.getElementById("sshv2_password").value;
        return "\nconfigure terminal\nip domain-name "+sshv2_domain+"\nline vty 0 4\nlogin local\ntransport input ssh\nexit\nusername "
        +sshv2_username+" secret "+sshv2_password+"\nip ssh version 2\ncrypto key generate rsa\n1024";
    } else {
        return "";
    }
}