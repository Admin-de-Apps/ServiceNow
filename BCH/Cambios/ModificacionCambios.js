//Pega 1 grupo de aprobacion
var gr = new GlideRecord("sysapproval_group");

gr.initialize();
gr.setDisplayValue("assignment_group", "109a3f691bf56410f720524f034bcb24"); // ID DEL GRUPO
gr.setDisplayValue("parent", "3de58a651b41cd10dd4331d3cc4bcbf8"); // ID DEL CAMBIO
gr.setValue("approval", "requested");
gr.setValue("priority", 31);
gr.insert();

//109a3f691bf56410f720524f034bcb24 UCC

//v2 Se pegan varios grupos de aprobación
var arr = [
  "a2e76ca81b47a4101df3bb7f034bcb7b",
  "b574b9a81b7470509a3154ee034bcb39",
  "6ae76ca81b47a4101df3bb7f034bcb94",
];

var numbers = arr.map(AsignaGrupo);

function AsignaGrupo(value) {
  var gr = new GlideRecord("sysapproval_group");

  gr.initialize();
  gr.setDisplayValue("assignment_group", value + ""); // ID DEL GRUPO
  gr.setDisplayValue("parent", "71827a4647a20d544d6f2d82e36d4361"); // ID DEL CAMBIO
  gr.setValue("approval", "requested");
  gr.setValue("priority", 31);
  gr.insert();
}

//Cambiar estado aprobacion de solicitado a ya no se necesita (TODOS)
var flag = false;
var gr = new GlideRecord("sysapproval_group");
gr.addQuery("parent", "96f2d293974681105b11b4e3f153af5c");
gr.addQuery("approval", "requested");
gr.query();
while (gr.next()) {
  gr.setValue("approval", "not_required");
  gr.update();
  flag = true;
}

if (!flag) gs.print("No hay");

//Cambiar estado aprobacion a 1 grupo
var flag = false;
var gr = new GlideRecord("sysapproval_group");
gr.addQuery("parent", "73a3b9c997a6c9545b11b4e3f153af7a");
gr.addQuery("assignment_group", "d2e4fda81b7470509a3154ee034bcbc5");
gr.addQuery("approval", "requested");
gr.query();
while (gr.next()) {
  gr.setValue("approval", "not_required");
  gr.update();
  flag = true;
}

if (!flag) gs.print("No hay");

// Cerrar cambio
var gr = new GlideRecord("change_request");
gr.get("2d0cdcf8970605545b11b4e3f153af6d");

gr.setValue("state", "3");
gr.setValue("work_notes", "Cerrado por usuario");
gr.setValue("close_code", "exito_parcial");
gr.update();

// grupos
// Admin_Seg dae76ca81b47a4101df3bb7f034bcb51
// Canal Remoto Corporativos aae76ca81b47a4101df3bb7f034bcb69
// Itec_Sis a2e76ca81b47a4101df3bb7f034bcb7b
// Middleware 1296f56c1b7470509a3154ee034bcbcf
// Oficinas d4757de81b7470509a3154ee034bcb43
// Produccion Aplicativos b574b9a81b7470509a3154ee034bcb39
// Produccion Comunicaciones d2e4fda81b7470509a3154ee034bcbc5
// Ucc 109a3f691bf56410f720524f034bcb24
// Qa 10b6b96c1b7470509a3154ee034bcb11
// Soporte Base de Datos eee76ca81b47a4101df3bb7f034bcb93
// Realease Manager 7715b5e81b7470509a3154ee034bcba9
// Soporte Operacional 6ae76ca81b47a4101df3bb7f034bcb94
