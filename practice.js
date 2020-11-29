onload = function () {
    // create a network
    const cities = ['Delhi', 'Mumbai', 'Ahmedabad', 'New York', 'Kanpur', 'Jammu', 'Hyderabad', 'Bangalore', 'Gangtok', 'Meghalaya', 'Washington', "Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];    var curr_data;
    var sz;
    var container = document.getElementById('mynetwork');                   // left mai jo question hai(randomly generated)
    var container2 = document.getElementById('mynetwork2');                 // right mai jo sol bana hai
    var genNew = document.getElementById('generate-graph');                 // button for generating the graph
    var solve = document.getElementById('solve');                           // button for solving the graph
    var temptext = document.getElementById('temptext');                 
    var temptext2 = document.getElementById('temptext2');                   // diplays the message that least path from this to this city
    

    // initialise graph options
    var options = {                                                         // ye wale initializing conditions hai(ki icon kaisa dikhega, font color and all)
        edges: {
            labelHighlightBold: true,
            font: {
                size: 20
            }
        },
        nodes: {
            font: '12px arial #f9bc04',
            scaling: {
                label: true
            },
            shape: 'icon',
            icon: {
                face: 'FontAwesome',
                code: '\uf64f',
                size: 40,
                color: '#f9bc04',
            }
        }
    };


    // initialize your network!
    var network = new vis.Network(container);                               // upar jo initialize kie the, unhi ko vis ke graph mai daalenge(ye hai question wala graph--->left)
    network.setOptions(options);
    var network2 = new vis.Network(container2);                             // for the right wala graph, wherein the calculations for the shortest distance is shown
    network2.setOptions(options);

    // THE MOST IMPORTANT FUNCTION FOR CREATING THE GRAPH (USING EDGE LIST!!!!!!!!!!!)
    //the nodes are chosen initially
    //N-1 edges which is the bare minimum requirment for a graph setup is made
    //another set of N/5 edges are made(dekhne mai kucj zyada hi sparse na ho :))))))
    function createData(){                                                  
        sz = Math.floor(Math.random() * 25) + 50;                               // max to max 75 cities and minimum is 25 cities
        let nodes = [];                                                         // choosing the nodes
        nodes.push({id:1, label: cities[0], icon : {color:"#eb3c62"}});
        for(let i=2;i<=sz - 1;i++){
            nodes.push({id:i, label: cities[i-1]});
        }
        nodes.push({id:sz, label: cities[sz-1], icon : {color:"#0ce897"}});
        nodes = new vis.DataSet(nodes);

        let edges = [];
        for(let i=2;i<=sz;i++){                                                 // we know that for a graph, minimum N-1 edges should exist!!!
            let neigh = i - Math.floor(Math.random()*Math.min(i-1,3)+1);
            edges.push({type: 0, from: i, to: neigh, color: 'rgb(95, 173, 224)',label: String(Math.floor(Math.random()*50)+200)});
        }

        src = 1;                                                                // source
        dst = sz;                                                               // destination

        for(let i=1;i<=sz/2;){                                                  // gonna have anothere set of N/2 nodes!!!
            let n1 = Math.floor(Math.random()*sz)+1;                            // start node 
            let n2 = Math.floor(Math.random()*sz)+1;                            // end node
            // we have to ensure that the new edge chosen follows these conditions:-
            // firstly, the start and end should not be same
            // secondly, the the edge should not be an existing one
            // once these are satisfied, we can play with some conditions like weight(distance) & the type of transport
            if(n1!=n2){                                                         
                if(n1<n2){
                    let tmp = n1;
                    n1 = n2;
                    n2 = tmp;
                }
                let works = 0;                                                  // used to toggle b/w transportation & weight
                for(let j=0;j<edges.length;j++){    
                    if(edges[j]['from']===n1 && edges[j]['to']===n2) {
                        if(edges[j]['type']===0)                                // iska matlab ki the new edge is called again(demand zyada hai) so make it flight transport
                            works = 1;
                        else
                            works = 2;                                          
                    }
                }

                if(works <= 1) {
                    if (works === 0 && i < sz / 4) {
                        edges.push({
                            type: 0,
                            from: n1,
                            to: n2,
                            color: 'rgb(226, 185, 114)',
                            label: String(Math.floor(Math.random() * 400) + 500)
                        });
                    } else {
                        edges.push({
                            type: 1,
                            from: n1,
                            to: n2,
                            color: '#0ce897',
                            label: String(Math.floor(Math.random() * 500) + 1000)
                        });
                    }
                    i++;
                }
            }
        }

        let data = {                                                             // this is the node and edge data (basically whole edge list)
            nodes: nodes,
            edges: edges
        };
        curr_data = data;
    }

    genNew.onclick = function () {                                              // generate button pe dabate hi new graph milega!
        createData();                                                            
        network.setData(curr_data);
        temptext2.innerText = 'Find least time path from '+cities[src-1]+' to '+cities[dst-1];
        temptext.style.display = "inline";
        temptext2.style.display = "inline";
        container2.style.display = "none";

    };

    solve.onclick = function () {                                               // solve button dabate hi answer!
        temptext.style.display  = "none";
        temptext2.style.display  = "none";
        container2.style.display = "inline";
        network2.setData(solveData(sz));
    };

    // The SSP core algorithm
    function dijkstra(graph, sz, src) {
        let vis = Array(sz).fill(0);
        let dist = [];
        for(let i=1;i<=sz;i++)
            dist.push([10000,-1]);
        dist[src][0] = 0;

        for(let i=0;i<sz-1;i++){
            let mn = -1;
            for(let j=0;j<sz;j++){
                if(vis[j]===0){
                    if(mn===-1 || dist[j][0]<dist[mn][0])
                        mn = j;
                }
            }

            vis[mn] = 1;
            for(let j in graph[mn]){
                let edge = graph[mn][j];
                if(vis[edge[0]]===0 && dist[edge[0]][0]>dist[mn][0]+edge[1]){
                    dist[edge[0]][0] = dist[mn][0]+edge[1];
                    dist[edge[0]][1] = mn;
                }
            }
        }

        return dist;
    }

    // The solution generated
    function solveData(sz) {
        let data = curr_data;
        let graph = [];
        for(let i=1;i<=sz;i++){
            graph.push([]);
        }

        for(let i=0;i<data['edges'].length;i++) {
            let edge = data['edges'][i];
            if(edge['type']===1)
                continue;
            // Here an adjacency list is developed (Hashmap) and isme sirf abhi 0th wale type dalenge(non flight) 
            graph[edge['to']-1].push([edge['from']-1,parseInt(edge['label'])]);         
            graph[edge['from']-1].push([edge['to']-1,parseInt(edge['label'])]);
        }

        // from source to all nodes distance
        let dist1 = dijkstra(graph,sz,src-1);
        // from destination to all nodes distance
        let dist2 = dijkstra(graph,sz,dst-1);

        let mn_dist = dist1[dst-1][0];

        let plane = 0;
        let p1=-1, p2=-1;
        for(let pos in data['edges']){
            let edge = data['edges'][pos];
            if(edge['type']===1){
                let to = edge['to']-1;
                let from = edge['from']-1;
                let wght = parseInt(edge['label']); 
                if(dist1[to][0]+wght+dist2[from][0] < mn_dist){
                    plane = wght;
                    p1 = to;
                    p2 = from;
                    mn_dist = dist1[to][0]+wght+dist2[from][0];
                }
                if(dist2[to][0]+wght+dist1[from][0] < mn_dist){
                    plane = wght;
                    p2 = to;
                    p1 = from;
                    mn_dist = dist2[to][0]+wght+dist1[from][0];
                }
            }
        }

        new_edges = [];
        if(plane!==0){
            new_edges.push({arrows: { to: { enabled: true}}, from: p1+1, to: p2+1, color: '#0ce897',label: String(plane)});
            new_edges.concat(pushEdges(dist1, p1, false));
            new_edges.concat(pushEdges(dist2, p2, true));
        } else{
            new_edges.concat(pushEdges(dist1, dst-1, false));
        }
        data = {
            nodes: data['nodes'],
            edges: new_edges
        };
        return data;
    }

    function pushEdges(dist, curr, reverse) {
        tmp_edges = [];
        while(dist[curr][0]!=0){
            let fm = dist[curr][1];
            if(reverse)
                new_edges.push({arrows: { to: { enabled: true}},from: curr+1, to: fm+1, color: 'rgb(226, 185, 114)', label: String(dist[curr][0] - dist[fm][0])});
            else
                new_edges.push({arrows: { to: { enabled: true}},from: fm+1, to: curr+1, color: 'rgb(226, 185, 114)', label: String(dist[curr][0] - dist[fm][0])});
            curr = fm;
        }
        return tmp_edges;
    }

    genNew.click();
};
