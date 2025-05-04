function FUNCTION_generate_dhcp_input_boxes() {
  const dhcp_count = parseInt(document.getElementById("dhcp_count").value);
  const dhcp_container = document.getElementById("dhcp_input_boxes");
  dhcp_container.innerHTML = "";
  for (let i=0 ; i < dhcp_count ; i++){
    const dhcp_poolname = document.createElement("input");
    dhcp_poolname.className = "INPUT_BOX_DHCP";
    dhcp_poolname.id = "dhcp_poolname_"+(i+1); //dhcp_poolname_1
    dhcp_poolname.type = "text";
    dhcp_poolname.placeholder = "Název poolu "+(i+1);
    dhcp_poolname.value = "DHCP_POOL_"+(i+1);
    dhcp_container.appendChild(dhcp_poolname);

    const dhcp_network = document.createElement("input");
    dhcp_network.className = "INPUT_BOX_DHCP";
    dhcp_network.id = "dhcp_network_"+(i+1); //dhcp_network_1
    dhcp_network.type = "text";
    dhcp_network.placeholder = "Adresa sítě";
    dhcp_container.appendChild(dhcp_network);

    const dhcp_mask = document.createElement("input");
    dhcp_mask.className = "INPUT_BOX_DHCP";
    dhcp_mask.id = "dhcp_mask_"+(i+1); //dhcp_mask_1
    dhcp_mask.type = "text";
    dhcp_mask.placeholder = "Maska sítě";
    dhcp_container.appendChild(dhcp_mask);

    const dhcp_def_router = document.createElement("input");
    dhcp_def_router.className = "INPUT_BOX_DHCP";
    dhcp_def_router.id = "dhcp_def_router_"+(i+1); //dhcp_def_router_1
    dhcp_def_router.type = "text";
    dhcp_def_router.placeholder = "Default router";
    dhcp_container.appendChild(dhcp_def_router);
  }
}


function FUNCTION_generate_eigrp_input_boxes() {
  const eigrp_count = parseInt(document.getElementById("eigrp_count").value);
  const eigrp_container = document.getElementById("eigrp_input_boxes");
  eigrp_container.innerHTML = "";
  for (let i=0 ; i < eigrp_count ; i++){
    const eigrp_network = document.createElement("input");
    eigrp_network.className = "INPUT_BOX_EIGRP";
    eigrp_network.id = "eigrp_network_"+(i+1); //eigrp_network_1
    eigrp_network.type = "text";
    eigrp_network.placeholder = "Adresa sítě "+(i+1);
    eigrp_container.appendChild(eigrp_network);

    const eigrp_mask = document.createElement("input");
    eigrp_mask.className = "INPUT_BOX_EIGRP";
    eigrp_mask.id = "eigrp_mask_"+(i+1); //eigrp_mask_1
    eigrp_mask.type = "text";
    eigrp_mask.placeholder = "Maska sítě "+(i+1);
    eigrp_container.appendChild(eigrp_mask);

  }
}

function FUNCTION_generate_ospf_input_boxes() {
  const ospf_count = parseInt(document.getElementById("ospf_count").value);
  const ospf_container = document.getElementById("ospf_input_boxes");
  ospf_container.innerHTML = "";
  for (let i=0 ; i < ospf_count ; i++){
    const ospf_network = document.createElement("input");
    ospf_network.className = "INPUT_BOX_EIGRP";
    ospf_network.id = "ospf_network_"+(i+1); //ospf_network_1
    ospf_network.type = "text";
    ospf_network.placeholder = "Adresa sítě "+(i+1);
    ospf_container.appendChild(ospf_network);

    const ospf_mask = document.createElement("input");
    ospf_mask.className = "INPUT_BOX_EIGRP";
    ospf_mask.id = "ospf_mask_"+(i+1); //ospf_mask_1
    ospf_mask.type = "text";
    ospf_mask.placeholder = "Maska sítě "+(i+1);
    ospf_container.appendChild(ospf_mask);

  }
}



function FUNCTION_generate_iphelper_input_boxes() {
  const iphelper_count = parseInt(document.getElementById("iphelper_count").value);
  const iphelper_container = document.getElementById("iphelper_input_boxes");
  iphelper_container.innerHTML = "";
  for (let i=0 ; i < iphelper_count ; i++){
    const iphelper_interface = document.createElement("input");
    iphelper_interface.className = "INPUT_BOX_EIGRP";
    iphelper_interface.id = "iphelper_interface_"+(i+1); //iphelper_interface_1
    iphelper_interface.type = "text";
    iphelper_interface.placeholder = "Interface "+(i+1);
    iphelper_container.appendChild(iphelper_interface);

    const iphelper_address = document.createElement("input");
    iphelper_address.className = "INPUT_BOX_EIGRP";
    iphelper_address.id = "iphelper_address_"+(i+1); //iphelper_address_1
    iphelper_address.type = "text";
    iphelper_address.placeholder = "IP adresa cíle "+(i+1);
    iphelper_container.appendChild(iphelper_address);

  }
}


function FUNCTION_show_hidden_tutorial(){
  document.getElementById("DIV_hidden_tutorial").style.display = "block";
}