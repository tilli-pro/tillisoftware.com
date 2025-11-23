export const sampleReactCode = `
import { useState } from "react";
import {
  Subscribe
} from "@tilli-pro/nudge.js/react";

const SubscribeToUpdates: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  
  return (
    <>
      <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />
      <Subscribe email={email} loading={loading}>
    </>
  );
};
`.slice(1);

export const sampleNodeCode = `
import {
  createClient
} from "@tilli-pro/nudge.js";

const nudgeClient = createClient({
  apiKey: process.env.NUDGE_API_KEY,
});

async function subscribeUser(email: string) {
  try {
    const response = await nudgeClient.subscribe({
      email,
      listId: "your-list-id",
    });
    console.log("Subscription successful:", response);
  } catch (error) {
    console.error("Subscription failed:", error);
  }
}
`.slice(1);

export const samplePythonCode = `
import tilli_pro_nudge

nudge_client = tilli_pro_nudge.Client(api_key="your_api_key")

def subscribe_user(email):
  try:
    response = nudge_client.subscribe(
      email=email,
      list_id="your-list-id"
    )
    print("Subscription successful:", response)
  except Exception as e:
    print("Subscription failed:", e)
`.slice(1);

export const sampleDotNetCode = `
using Tilli.Pro.Nudge;

var nudgeClient = new NudgeClient("your_api_key");

async Task SubscribeUser(string email)
{
  try
  {
    var response = await nudgeClient.SubscribeAsync(new SubscribeRequest
    {
      Email = email,
      ListId = "your-list-id"
    });
    Console.WriteLine("Subscription successful: " + response);
  }
  catch (Exception ex)
  {
    Console.WriteLine("Subscription failed: " + ex.Message);
  }
}
`.slice(1);

export const samplePhpCode = `
<?php
require 'vendor/autoload.php';

use Tilli\\Pro\\Nudge\\NudgeClient;

$nudgeClient = new NudgeClient('your_api_key');

function subscribeUser($email) {
  global $nudgeClient;
  try {
    $response = $nudgeClient->subscribe([
      'email' => $email,
      'listId' => 'your-list-id'
    ]);
    echo "Subscription successful: " . print_r($response, true);
  } catch (Exception $e) {
    echo "Subscription failed: " . $e->getMessage();
  }
}
?>
`.slice(1);

export const sampleRubyCode = `
require 'tilli_pro_nudge'

nudge_client = TilliProNudge::Client.new(api_key: 'your_api_key')

def subscribe_user(email)
  begin
    response = nudge_client.subscribe(
      email: email,
      list_id: 'your-list-id'
    )
    puts "Subscription successful: #{response}"
  rescue => e
    puts "Subscription failed: #{e.message}"
  end
end
`.slice(1);
