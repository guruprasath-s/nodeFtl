<html>
<title>Dashboard Page</title>

<head>
</head>

<body>
<div class="headerContainer">
    <#if userName??>
        <div class="userName"><span>Welcome</span>${userName!}</div>
    </#if>
    <div class="logoutButton">Logout</div>
</div>
<div class="parentContainer">
    <div class="headerCont">
        <div class="tableHeaders userNameHeader">User Name</div>
        <div class="tableHeaders parentHeader">Parent</div>
        <div class="tableHeaders">Read</div>
        <div class="tableHeaders">Write</div>
        <div class="tableHeaders">Update</div>
        <div class="tableHeaders">Delete</div>
    </div>
</div>
</body>
</html>