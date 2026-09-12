/*
 {
    "item": "name of the item",
    "material": "material type",
    "condition": "usable/damaged/etc",
    "reuseIdeas": [
                    {
                        "title": "idea name",
                        "description": "short explanation",
                        "difficulty": "Easy/Medium/Hard",
                        "materials": [],
                        "steps": []
                            }
                        ],
    "recyclingAdvice": "recycling or disposal advice"
 }
*/

export interface ReuseIdeaReq{

  image?:{
        uri: string;
        name: string;
        type: string;
    } | null;
}

export interface ReuseIdea {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  materials: string[];
  steps: string[];
}

export interface WasteAnalysis {
  item: string;
  material: string;
  condition: string;
  reuseIdeas: ReuseIdea[];
  recyclingAdvice: string;
}