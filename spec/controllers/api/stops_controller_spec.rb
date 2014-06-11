require 'spec_helper'

describe Api::StopsController do

  let(:stop) { FactoryGirl.create :stop }

  it 'has an index' do
    get :index, format: :json
    expect(response).to be_successful
  end

  it 'has a show action' do
    get :show, id: stop.id, format: :json
    expect(response).to be_successful
  end

  it 'does not respond to HTML' do
    expect { get :index, format: :html }.to raise_error
  end

end
